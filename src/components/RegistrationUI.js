import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { db, storage } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useHistory } from 'react-router-dom';

const RegistrationUI = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    profession: '',
    membershipCategory: '',
    isOver18: false,
    hasBankAccount: false,
    preferredServices: [],
    howHeard: '',
    remarks: '',
    gender: 'male',
    profileImage: null
  });
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const serviceOptions = [
    'Employment/Study Abroad Assistance',
    'Business Plan Preparation',
    'Finance Sourcing',
    'Property/Development Connections',
    'Import/Export Finance',
    'Media & Entertainment Promotion',
    'Sports & Exchange Programs',
    'Charity/Community Support',
    'Farming/Youth Empowerment',
    'Training & Professional Development'
  ];

  useEffect(() => {
    // Inject responsive CSS
    const responsiveCSS = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .fade-in {
        animation: fadeIn 0.5s ease-out;
      }

      @media (max-width: 1024px) {
        .left-panel-hidden {
          display: none !important;
        }
        
        .registration-container {
          flex-direction: column !important;
          padding: 15px !important;
          gap: 15px !important;
        }
        
        .registration-right-panel {
          padding: 40px 24px !important;
        }
      }

      @media (max-width: 768px) {
        .registration-container {
          padding: 10px !important;
        }
        
        .registration-right-panel {
          padding: 32px 20px !important;
          border-radius: 20px !important;
        }
        
        .registration-row {
          flex-direction: column !important;
          gap: 16px !important;
        }
        
        .registration-gender-section {
          flex-direction: column !important;
          gap: 12px !important;
          align-items: flex-start !important;
        }
        
        .registration-gender-options {
          gap: 12px !important;
        }
        
        .registration-title {
          font-size: 24px !important;
        }

        .profile-upload-container {
          align-items: center !important;
        }

        .profile-upload-info {
          text-align: center !important;
        }
      }

      @media (max-width: 480px) {
        .registration-container {
          padding: 8px !important;
        }
        
        .registration-right-panel {
          padding: 24px 16px !important;
          border-radius: 16px !important;
        }
        
        .registration-title {
          font-size: 22px !important;
        }
        
        .registration-input,
        .registration-phone-input {
          padding: 14px 12px !important;
          font-size: 16px !important;
        }
        
        .registration-submit-button {
          padding: 16px 20px !important;
          font-size: 16px !important;
        }
        
        .registration-gender-options {
          flex-direction: column !important;
          gap: 10px !important;
        }

        .profile-preview {
          width: 100px !important;
          height: 100px !important;
        }

        .service-checkboxes {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }

        .button-group {
          flex-direction: column !important;
          gap: 12px !important;
        }

        .button-group button {
          width: 100% !important;
        }
      }

      @media (max-width: 360px) {
        .registration-right-panel {
          padding: 20px 12px !important;
        }
        
        .registration-title {
          font-size: 20px !important;
        }

        .help-icon {
          width: 28px !important;
          height: 28px !important;
          font-size: 14px !important;
        }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = responsiveCSS;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'preferredServices') {
      setFormData(prev => {
        const newServices = checked
          ? [...prev.preferredServices, value]
          : prev.preferredServices.filter(s => s !== value);
        return { ...prev, preferredServices: newServices };
      });
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Please select an image smaller than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setFormData(prev => ({ ...prev, profileImage: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({ ...prev, profileImage: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);
  const handleBackHome = () => history.push('/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let imageUrl = '';
      if (formData.profileImage) {
        const imageRef = ref(storage, `profilePics/${Date.now()}_${formData.profileImage.name}`);
        await uploadBytes(imageRef, formData.profileImage);
        imageUrl = await getDownloadURL(imageRef);
      }
      const { profileImage, ...rest } = formData;
      await addDoc(collection(db, 'registrations'), {
        ...rest,
        profileImageUrl: imageUrl,
        created: Timestamp.now()
      });
      setSuccess(true);
      setStep(1);
      setFormData({
        fullName: '',
        position: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        profession: '',
        membershipCategory: '',
        isOver18: false,
        hasBankAccount: false,
        preferredServices: [],
        howHeard: '',
        remarks: '',
        gender: 'male',
        profileImage: null
      });
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => history.push('/'), 1500);
    } catch (err) {
      console.error('Firebase registration error:', err);
      alert('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.container} className="registration-container">
      {/* Left Panel - Hidden on screens <= 1024px */}
      <div style={styles.leftPanel} className="left-panel-hidden">
        <div style={styles.brand}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>📝</div>
            <span style={styles.brandText}>BIAFEF</span>
          </div>
        </div>
        
        <div style={styles.illustration}>
          <div style={styles.character}>
            <div style={styles.characterHead}></div>
            <div style={styles.characterBody}>
            <div style={styles.characterArm}></div>
          </div>
          </div>
          
          <div style={styles.desk}></div>
          <div style={styles.monitor}></div>
          <div style={styles.keyboard}></div>
          
          <div style={{...styles.floatingElement, ...styles.floatingCard1}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingCard2}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingCard3}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingCircle1}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingCircle2}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingDot1}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingDot2}}></div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel} className="registration-right-panel">
        <div style={styles.formContainer}>
          <div style={{
            ...styles.formHeader,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
            padding: 0,
            width: '100%',
          }}>
            <button
              type="button"
              onClick={handleBackHome}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: 18,
                cursor: 'pointer',
                outline: 'none',
                padding: 0,
                lineHeight: 1.2,
                letterSpacing: 0.5,
                marginRight: 98,
              }}
              aria-label="Back to Home"
            >
              <span style={{ fontSize: 20, fontWeight: 700, marginRight: 4 }}>←</span> Back
            </button>
            <h2 style={{ ...styles.title, margin: 0, fontSize: 22, flex: 1, textAlign: 'right' }} className="registration-title">REGISTRATION</h2>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            {/* Step 1: Profile Image & Basic Info */}
            {step === 1 && (
              <div className="fade-in">
                {/* Profile Image Upload */}
                <div style={styles.profileUploadContainer} className="profile-upload-container">
                  <div style={styles.profileImageSection}>
                    {imagePreview ? (
                      <div style={styles.imagePreviewContainer}>
                        <img 
                          src={imagePreview} 
                          alt="Profile preview" 
                          style={styles.profilePreview}
                          className="profile-preview"
                        />
                        <button 
                          type="button" 
                          style={styles.removeImageButton}
                          onClick={removeImage}
                          title="Remove image"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        style={styles.uploadPlaceholder} 
                        onClick={triggerImageUpload}
                        className="profile-preview"
                      >
                        <Camera size={32} color="#9ca3af" />
                      </div>
                    )}
                  </div>
                  
                  <div style={styles.profileUploadInfo} className="profile-upload-info">
                    <button 
                      type="button" 
                      style={styles.uploadButton}
                      onClick={triggerImageUpload}
                    >
                      <Upload size={16} />
                      Upload Photo
                    </button>
                    <p style={styles.uploadHint}>
                      JPG, PNG or GIF (Max 5MB)
                    </p>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={styles.hiddenInput}
                  />
                </div>

                <div style={styles.row} className="registration-row">
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                      className="registration-input" 
                  style={styles.input}
                      placeholder="Enter your full name"
                      required 
                />
              </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Telephone *</label>
                <input
                      type="tel" 
                      name="phoneNumber" 
                      value={formData.phoneNumber} 
                  onChange={handleInputChange}
                      className="registration-input" 
                  style={styles.input}
                      placeholder="+234 800 123 4567"
                      required 
                />
              </div>
            </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                    className="registration-input" 
                  style={styles.input}
                    placeholder="your.email@example.com"
                    required 
                />
              </div>
                
                <button type="button" style={{ ...styles.submitButton, marginTop: 32 }} className="registration-submit-button" onClick={handleNext}>
                  Next →
                </button>
                  </div>
            )}

            {/* Step 2: Location & Profession */}
            {step === 2 && (
              <div className="fade-in">
                <div style={styles.row} className="registration-row">
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                      className="registration-input" 
                  style={styles.input}
                      placeholder="Nigeria"
                      required 
                />
              </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                      className="registration-input" 
                  style={styles.input}
                      placeholder="Lagos"
                      required 
                />
              </div>
            </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Profession/Occupation *</label>
                <input
                    type="text" 
                    name="profession" 
                    value={formData.profession} 
                  onChange={handleInputChange}
                    className="registration-input" 
                  style={styles.input}
                    placeholder="Software Developer, Teacher, etc."
                    required 
                />
              </div>
                
                <div style={styles.buttonGroup} className="button-group">
                  <button type="button" style={styles.backButton} onClick={handleBack}>
                    ← Back
                  </button>
                  <button type="button" style={{ ...styles.submitButton, marginTop: 32 }} className="registration-submit-button" onClick={handleNext}>
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Membership & Personal Details */}
            {step === 3 && (
              <div className="fade-in">
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Membership Category *</label>
                  <select 
                    name="membershipCategory" 
                    value={formData.membershipCategory} 
                  onChange={handleInputChange}
                    className="registration-input" 
                  style={styles.input}
                    required
                  >
                    <option value="">Please select</option>
                    <option value="free">Category 1: Free Membership</option>
                    <option value="paid">Category 2: ₦1,000 Full Membership</option>
                  </select>
            </div>

                <div style={styles.checkboxRow}>
                  <div style={styles.checkboxGroup}>
                    <label style={styles.checkboxLabel}>
                  <input
                        type="checkbox" 
                        name="isOver18" 
                        checked={formData.isOver18} 
                    onChange={handleInputChange}
                        style={styles.checkbox}
                  />
                      <span>I am over 18 years old</span>
                </label>
                  </div>
                  <div style={styles.checkboxGroup}>
                    <label style={styles.checkboxLabel}>
                  <input
                        type="checkbox" 
                        name="hasBankAccount" 
                        checked={formData.hasBankAccount} 
                    onChange={handleInputChange}
                        style={styles.checkbox}
                  />
                      <span>I have a bank account</span>
                </label>
                  </div>
                </div>
                
                <div style={styles.genderSection} className="registration-gender-section">
                  <span style={styles.genderLabel}>Gender</span>
                  <div style={styles.genderOptions} className="registration-gender-options">
                <label style={styles.radioLabel}>
                      <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} /> 
                      <span>Male</span>
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} /> 
                      <span>Female</span>
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleInputChange} /> 
                      <span>Other</span>
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="gender" value="prefer-not-to-say" checked={formData.gender === 'prefer-not-to-say'} onChange={handleInputChange} /> 
                      <span>Prefer not to say</span>
                    </label>
                  </div>
                </div>
                
                <div style={styles.buttonGroup} className="button-group">
                  <button type="button" style={styles.backButton} onClick={handleBack}>
                    ← Back
                  </button>
                  <button type="button" style={{ ...styles.submitButton, marginTop: 32 }} className="registration-submit-button" onClick={handleNext}>
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Services & Additional Info */}
            {step === 4 && (
              <div className="fade-in">
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Preferred Service/Benefit</label>
                  <div style={styles.serviceCheckboxes} className="service-checkboxes">
                    {serviceOptions.map(option => (
                      <label key={option} style={styles.serviceCheckboxLabel}>
                  <input
                          type="checkbox"
                          name="preferredServices"
                          value={option}
                          checked={formData.preferredServices.includes(option)}
                    onChange={handleInputChange}
                          style={styles.checkbox}
                  />
                        <span>{option}</span>
                </label>
                    ))}
                  </div>
                </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>How did you hear about BIAFEF?</label>
                  <input
                    type="text" 
                    name="howHeard" 
                    value={formData.howHeard} 
                    onChange={handleInputChange}
                    className="registration-input" 
                    style={styles.input} 
                    placeholder="Social media, friend, website, etc."
                  />
              </div>
                
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Remarks</label>
                  <textarea 
                    name="remarks" 
                    value={formData.remarks} 
                    onChange={handleInputChange} 
                    className="registration-input" 
                    style={{...styles.input, minHeight: 80, resize: 'vertical'}} 
                    placeholder="Any additional comments or information..."
                  />
            </div>

                <div style={styles.buttonGroup} className="button-group">
                  <button type="button" style={styles.backButton} onClick={handleBack}>
                    ← Back
            </button>
                  <button type="button" style={{ ...styles.submitButton, marginTop: 32 }} className="registration-submit-button" onClick={handleNext}>
                    Review →
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="fade-in">
                <div style={styles.reviewContainer}>
                  <h3 style={styles.reviewTitle}>Review Your Details</h3>
                  
                  {imagePreview && (
                    <div style={styles.reviewImageContainer}>
                      <img 
                        src={imagePreview} 
                        alt="Profile" 
                        style={styles.reviewImage}
                      />
            </div>
                  )}
                  
                  <div style={styles.reviewGrid}>
                    <div style={styles.reviewItem}>
                      <strong>Full Name:</strong> {formData.fullName}
          </div>
                    <div style={styles.reviewItem}>
                      <strong>Email:</strong> {formData.email}
        </div>
                    <div style={styles.reviewItem}>
                      <strong>Phone:</strong> {formData.phoneNumber}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Location:</strong> {formData.city}, {formData.country}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Profession:</strong> {formData.profession}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Membership:</strong> {formData.membershipCategory === 'paid' ? '₦1,000 Full Membership' : 'Free Membership'}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Gender:</strong> {formData.gender.replace('-', ' ')}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Over 18:</strong> {formData.isOver18 ? 'Yes' : 'No'}
                    </div>
                    <div style={styles.reviewItem}>
                      <strong>Has Bank Account:</strong> {formData.hasBankAccount ? 'Yes' : 'No'}
                    </div>
                    {formData.preferredServices.length > 0 && (
                      <div style={styles.reviewItem}>
                        <strong>Preferred Services:</strong> {formData.preferredServices.join(', ')}
                      </div>
                    )}
                    {formData.howHeard && (
                      <div style={styles.reviewItem}>
                        <strong>How you heard about us:</strong> {formData.howHeard}
                      </div>
                    )}
                    {formData.remarks && (
                      <div style={styles.reviewItem}>
                        <strong>Remarks:</strong> {formData.remarks}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={styles.buttonGroup} className="button-group">
                  <button type="button" style={styles.backButton} onClick={handleBack}>
                    ← Back
                  </button>
                  <button type="submit" style={{ ...styles.submitButton, marginTop: 32 }} className="registration-submit-button" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Registration ✓'}
                  </button>
                </div>
              </div>
            )}
            
            {success && (
              <div style={{ textAlign: 'center', color: '#22c55e', fontWeight: 600, marginTop: 24, fontSize: 18 }}>
                Registration successful! Redirecting...
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f1f5f9',
    margin: 0,
    padding: '20px',
    gap: '24px',
    boxSizing: 'border-box'
  },
  leftPanel: {
    flex: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '48px 40px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '600px'
  },
  brand: {
    marginBottom: '40px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoIcon: {
    fontSize: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '8px',
    borderRadius: '8px'
  },
  brandText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white'
  },
  illustration: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  character: {
    position: 'relative',
    zIndex: 10
  },
  characterHead: {
    width: '60px',
    height: '60px',
    backgroundColor: '#ff6b6b',
    borderRadius: '50%',
    position: 'relative',
    margin: '0 auto 10px auto'
  },
  characterBody: {
    width: '80px',
    height: '100px',
    backgroundColor: '#4ecdc4',
    borderRadius: '20px',
    position: 'relative',
    margin: '0 auto'
  },
  characterArm: {
    width: '30px',
    height: '60px',
    backgroundColor: '#4ecdc4',
    borderRadius: '15px',
    position: 'absolute',
    top: '70px',
    right: '-25px',
    transform: 'rotate(-30deg)'
  },
  desk: {
    width: '120px',
    height: '20px',
    backgroundColor: '#8b5cf6',
    borderRadius: '10px',
    position: 'absolute',
    bottom: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5
  },
  monitor: {
    width: '80px',
    height: '60px',
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    position: 'absolute',
    bottom: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 6
  },
  keyboard: {
    width: '60px',
    height: '20px',
    backgroundColor: '#374151',
    borderRadius: '5px',
    position: 'absolute',
    bottom: '105px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 6
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: '10px',
    animation: 'float 3s ease-in-out infinite'
  },
  floatingCard1: {
    width: '40px',
    height: '30px',
    backgroundColor: '#ffd93d',
    top: '20%',
    left: '20%',
    animationDelay: '0s'
  },
  floatingCard2: {
    width: '35px',
    height: '25px',
    backgroundColor: '#ff6b6b',
    top: '60%',
    right: '20%',
    animationDelay: '1s'
  },
  floatingCard3: {
    width: '30px',
    height: '20px',
    backgroundColor: '#4ecdc4',
    bottom: '30%',
    left: '30%',
    animationDelay: '2s'
  },
  floatingCircle1: {
    width: '20px',
    height: '20px',
    backgroundColor: '#a8e6cf',
    borderRadius: '50%',
    top: '30%',
    right: '30%',
    animationDelay: '0.5s'
  },
  floatingCircle2: {
    width: '25px',
    height: '25px',
    backgroundColor: '#ffd93d',
    borderRadius: '50%',
    bottom: '20%',
    right: '40%',
    animationDelay: '1.5s'
  },
  floatingDot1: {
    width: '10px',
    height: '10px',
    backgroundColor: '#ff9ff3',
    borderRadius: '50%',
    top: '50%',
    left: '10%',
    animationDelay: '0.3s'
  },
  floatingDot2: {
    width: '8px',
    height: '8px',
    backgroundColor: '#54a0ff',
    borderRadius: '50%',
    top: '80%',
    right: '10%',
    animationDelay: '1.8s'
  },
  rightPanel: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 40px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px'
  },
  formHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0
  },
  helpIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#3b82f6',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  profileUploadContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '2px dashed #e2e8f0',
    marginBottom: '10px'
  },
  profileImageSection: {
    flexShrink: 0
  },
  imagePreviewContainer: {
    position: 'relative'
  },
  profilePreview: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #e2e8f0'
  },
  uploadPlaceholder: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#f1f5f9',
    border: '2px dashed #cbd5e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: '#e2e8f0',
      borderColor: '#94a3b8'
    }
  },
  removeImageButton: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  profileUploadInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    alignSelf: 'flex-start',
    '&:hover': {
      backgroundColor: '#2563eb'
    }
  },
  uploadHint: {
    fontSize: '12px',
    color: '#64748b',
    margin: 0,
    lineHeight: 1.4
  },
  hiddenInput: {
    display: 'none'
  },
  row: {
    display: 'flex',
    gap: '16px'
  },
  inputGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    minWidth: 0
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151'
  },
  input: {
    padding: '12px 16px',
    border: '1.5px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
    width: '100%',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    }
  },
  checkboxRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer',
    lineHeight: 1.5
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: '#3b82f6'
  },
  genderSection: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginTop: '8px',
    flexWrap: 'wrap'
  },
  genderLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    minWidth: '60px',
    flexShrink: 0,
    marginTop: '2px'
  },
  genderOptions: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    flex: 1
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  serviceCheckboxes: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginTop: '8px'
  },
  serviceCheckboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer',
    lineHeight: 1.4,
    padding: '8px',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#f8fafc'
    }
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    marginTop: '24px'
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.2s',
    flex: 1,
    '&:hover': {
      backgroundColor: '#2563eb',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    }
  },
  backButton: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '14px 28px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    flex: 1,
    '&:hover': {
      backgroundColor: '#e2e8f0',
      transform: 'translateY(-1px)'
    }
  },
  reviewContainer: {
    marginBottom: '24px'
  },
  reviewTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '20px',
    textAlign: 'center'
  },
  reviewImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  reviewImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #e2e8f0'
  },
  reviewGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  reviewItem: {
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: 1.5,
    borderLeft: '4px solid #3b82f6'
  },
  signInLink: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#64748b',
    marginTop: '24px'
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

export default RegistrationUI;