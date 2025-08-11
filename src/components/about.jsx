import React, { useState, useEffect } from 'react';

export const About = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const mandateSummary = `The Holy Father's Mandate outlines the spiritual and professional mission, membership, and structure of the International Accountants, Finance and Entrepreneurs Fellowship (BIAFEF). Click to read the full mandate and membership guidelines.`;
  const speechSummary = `The International Chairman's Speech highlights the vision, divisions, and responsibilities of BIAFEF, emphasizing the importance of professional, financial, and entrepreneurial growth for all members. Click to read the full address.`;

  const mandateFull = `
His Holiness Olumba Obu
The King of Kings and Lord of lords
Leader Unified Universal Theocratic Council &
Head of Administration BCS Worldwide
34, Ambo Street, Calabar,
Cross River State, Nigeria

REPORT OF THE INTERNATIONAL ACCOUNTANTS, FINANCE AND ENTREPRENEURS FELLOWSHIP
1.0 INTRODUCTION
Dear Father, we your children are most grateful to you, for your love, life, good health, peace and prosperity. Thank you for using this season of the living breath of God to fulfil all of your will and purpose in our lives.

Papa, this Fellowship which was referred to as BCS International Accountants (BIA) in May, 1988, incorporated in Nigeria, United Kingdom and the United States of America in June, August and November 1988 respectively were also incorporated same year, and had certificates which were unveiled by the Holy Father at the World Headquarters on 31st December 1988.

The operational status was limited at the time due to membership which was limited to certified Accountants. Today we appear better than it was at the time, however, still require so much efforts to enlarge the Fellowship for better service and operations that will be of benefit to Brotherhood of the Cross and Star.

Papa, in your wisdom therefore, today you have expanded it and named it the International Accountants, Finance and Entrepreneurs Fellowship, which we now call (BIAFEF), the acronym B, refers to BCS, meaning BCS International Accountants, Finance and Entrepreneurs Fellowship. In this vein membership has been expanded to include the entire school of Business / Management with clear guideline on expected membership. In additional, you also have opened it up for business students as well as social science students, and specially all persons holding positions in BCS as Treasurers and Financial Secretaries.

Papa, thank you for setting the pace and given us clear mandate to work with. We the International Executives shall follow your guide to ensure the objectives of the Fellowship are met.

This Fellowship now have a rebirth, having authorized it spiritually and physically to operate during your advice and blessings on the 30th of March, 2025.

We also acknowledge the current position it is placed in the BCS organogram under business. Other than routine operations expected from the Fellowship as required, we shall regularly take your instructions for all tasks you may assign to the Fellowship from time to time.

We haven’t achieved much at this time; however, we are sending this report to intimate you our Father, of our preparedness towards achieving the mandate.

Thank you, ones, more our Dear Father.

2.0 ADMINISTRATIVE STRUCTURE
Dear Father, the inaugural Administrative Structure is as shown below in line with your Advice and Blessings (declaration) of 30th March 2025. A few amendments were only made to the BCS titles of some brethren to reflect their current pew:

TABLE A: EXECUTIVE LISTS
TABLE B: FINANCE COMMITTEE
TABLE C: ETHICS AND DISCIPLINE COMMITTEE
TABLE D: TRAINING AND DEVELOPMENT COMMITTEE
TABLE E: MEMBERSHIP WELFARE SERVICES

3.0 THE MANDATE
Father for records sake, we have decided to replicate your mandate for the Fellowship. What is presented here is in line with our hearing during the advice and blessings.

“The mandate of the Fellowship are as follows: -
1.To provide professional accountancy and auditing services to relevant organs and enterprises within the Kingdom.
2.To offer Tax advisory services.
3.To establish a professional development unit for the guidance of young BCS accountants.
4.To provide faculty support to the planned Triple Star University particularly within its management sciences faculty and business school.
5.To support the development of feasibility studies and offer supervisory roles for the implementation of BCS Mega Project as approved by the Holy Father.
6.To recommend to the Holy Father a robust international(internal) control framework anchored by properly staffed internal audit unit to ensure the realization of the established objectives of BCS establishments and enterprises.
7.To conduct performance evaluations of BCS Enterprises based on the Holy Father's approval to implement efficient and effective accounting and reporting frameworks that adhered to global standard(s).
8.To develop a comprehensive professional training program that is continually reviewed and updated to adapt to evolving circumstances.
9.To establish a standardized accounting documentation and reporting system for the guidance of treasury officers across BCS.
10.To undertake any other responsibilities assigned by the Holy Father from time to time.”

4.0 THE MEMBERSHIP
Papa, in same vein, we also repeat the Fellowship membership guideline handed down to us for records.

“Members of the Fellowship shall be opened to:
1.All practicing as aspiring accountants from both the private and public sectors.
2.Practicing financial auditors, tax consultants, management consultants and corporate managers and entrepreneurs.
3.Students of Accounting, Finance, Economics, Management, Entrepreneurship and related discipline.
4.Treasury and budget officers.
5.Financial Secretaries and Treasurers of all BCS formation(s), Fellowships, establishments, and bodies.
6.Retired accountants, managers and directors.
7.Business coaches, development officers, traders, business men and women, security officers- army, police etc. engineers, nurses, doctors, consultants, all Federal and State members of staff, cleaners, and trainers etc.
8.All aspiring entrepreneurs.”

THANK YOU FATHER

Bishop Ibiyekaribo Jack        JFoluAluko
Secretary General              HG Archbishop Joseph Aluko FCA
                               International Chairman
`;

  const speechFull = `
30 APRIL 2025

In the name of our Lord Jesus Christ,
In the blood of our Lord Jesus Christ,
Now & forevermore. Amen.

Dear brethren, we thank our Holy Father immensely for this great and unique day in the history of BCS: for our Holy Father’s creation of this Fellowship for us. Words are inadequate to express my sincerest thanks, gratitude and appreciation of this wonderful event to our Holy Father. It is highly remarkable and noteworthy for the creation of this
BIA INTERNATIONAL ACCCOUNTANTS, FINANCE, AND ENTREPRENEURS. The history and legacy are created by our God Almighty, His Holiness Olumba Olumba Obu for us to add value to BCS globally and to create financial emancipation in the activities of making money by starting or running our own businesses, especially when this involves taking financial Entrepreneurship (self-employment) for us and the entire generation.
BCS, has taken over the rulership of the whole world, whereby, all knees will bow down and acknowledge the reign of our Holy Father, His Holiness Olumba Olumba Obu. The Accounting system must be uniform with ITC software developments using modern technology in all Bethels, Pentecostal Centres, States and all nations of the world. This is the primary mandate of this Fellowship.

Testimony of BIA- Brotherhood International Accountants by
HG Archbishop Joseph Aluko FCTI, FCA in May 1988
to date-(37) thirty-seven years ago.

Please permit me to elucidate the 3 (three) Divisions of our Mandate in order for us to know the magnitude of our duties and responsibilities.
We must realise that our appointments are by our God Almighty to work in this new Kingdon of God here on earth. It is completely different from working for Government ministries, Corporations- large or small (SME) organisations whereby we work from 9:00 am to 5:00 pm. This requires total and entire commitment with transparency and assiduity.

(1)ACCOUNTANTS- An accountant is a financial professional (Practitioner) who reviews and analyses financial records and keeps track of a company's or individual's income, expenditures, and liabilities. An accountant may also work in project planning, cost analysis, auditing, and financial decision-making. Some of us specialize in tax preparation and tax planning. This is a wide area of our operations in the BCS and working for ourselves to be financially free and create wealth.
You are all Accountants, and members of BIAFEF.

(2)  FINANCE-
Finance is a term that addresses matters regarding to the management, creation, and the use of money and investments. It involves the use of credit and debt, securities, which includes activities such as investing, borrowing, lending, budgeting, saving, and forecasting.
How many of you have Bank Accounts? Nearly all of us-
You are all Bankers and members of BIAFEF.

(3) ENTREPRENEURS- An entrepreneur is an individual who creates a new business, bearing most of the risks and enjoying most of the rewards. The process of setting up a business is known as entrepreneurship. Entrepreneurs play a key role in any economy, using the skills and initiative necessary to anticipate needs and bring new ideas to market. It simply means “Self-Employment”
How many of us are Employees? it is “job broke”.
How many Employees are Millionaires that have financial Freedom and have their own houses?
Our Holy Father has blessed our hands and not to be begging, but to be financially free. (Everlasting Gospel, Volume two).
1 CORINTHIANS 4:1 to 20 "And labour, working with our own hands: being reviled, we bless: being persecuted, we suffer it".

We are the luckiest generations blessed by our God Almighty.
You are all Entrepreneurs and members of BIAFEF.

1.The current Committees would be expanded both in terms of number and membership to cater for the following areas: business development and trade programs.
2.Establish a strategic alliance with the First Royal Microfinance Bank to support our entrepreneurial development program.
3.The Vice Chairman Finance to immediately commence working with the Finance Committee to identify the various creative sources of the Fellowship's income and not following the traditional fund-raising approach.
4. The Training and development Committee to immediately present its programs on practical training of all Financial Secretaries, Accountants, Internal Auditors and the Treasurers of BCS and its establishments.

CONCLUSION:

(1)BROTHERHOOD INTERNATIONAL ACCCOUNTANTS, FINANCE & ENTRPREPNEURS:
These are the biggest parts of our Mandate which will be registered with Corporate Affairs Commission in Abuja and the Federal Inland Revenue. This Division is like the 4 biggest firms of Chartered Accountants globally: -
(i)Coopers & Lybrand and Price Waterhouse (PWC)
(ii)Deloitte & Touche
(iii)Ernst & young (E & Y)
(iv)GPMG
(a) KPMG formerly (Peat Marwick) which was the first Audit firm used to take away our resources and wealth using United African Trading Companies (UAC) Group of Companies.
(b) This was the reason why our Holy Father, His Holiness Olumba Obu established Globe Master Services to capture the world economy, but due to lack of love, division and self-aggrandizement, this is not functioning.
These 4 firms of Chartered Accountants monopolise and extract trillions of US Dollars from Africa and the Caribbean Islands globally and yearly.
How many of us would like to have their own houses?
Please get yourself educated, with practical Training, hard work with commitments to our Holy Father’s assignments given to us.
We are blessed with Natural Resources, farming, minerals, weather, soil, human resources and modern technology by our Holy Father.
Our Holy Father has given us emancipation, physically, economically, financially and spiritually:  please let us be united to benefit from these unique privileges and opportunities given to us freely and on a platter of gold.
“Let brotherly love continue”- Hebrew 13 1 to 3.
Song: “Tell me what more, tell me what more can Olumba do (2), Leader Olumba lays foundation and open the gate of mercy, what more, what more can Olumba do?”
Thank you Father.
`;

  function AccordionCard({ title, summary, fullText, color = '#2563eb' }) {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: isMobile ? 16 : 20,
          padding: isMobile ? '24px 20px' : '32px 28px',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(44,62,80,0.15), 0 0 0 1px rgba(99,114,255,0.1)' 
            : '0 8px 32px rgba(44,62,80,0.08)',
          border: `2px solid ${open ? color : 'transparent'}`,
          marginBottom: isMobile ? 24 : 32,
          maxWidth: isMobile ? '100%' : 800,
          marginLeft: 'auto',
          marginRight: 'auto',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered && !isMobile ? 'translateY(-2px)' : 'translateY(0)',
          position: 'relative',
          overflow: 'hidden',
          margin: isMobile ? '0 10px 24px 10px' : 'auto auto 32px auto'
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
          opacity: open ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }} />
        
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            cursor: 'pointer',
            padding: isMobile ? '4px 0' : '8px 0'
          }} 
          onClick={() => setOpen(o => !o)}
        >
          <h3 style={{ 
            color: '#1a202c', 
            fontWeight: 700, 
            marginBottom: 0, 
            fontSize: isMobile ? 18 : 24, 
            letterSpacing: 0.3,
            fontFamily: '"Raleway", sans-serif',
            lineHeight: isMobile ? 1.3 : 1.2,
            paddingRight: isMobile ? '10px' : '20px'
          }}>
            {title}
          </h3>
          <div style={{
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            borderRadius: '50%',
            background: open ? color : `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            flexShrink: 0
          }}>
            <span style={{ 
              fontSize: isMobile ? 18 : 20, 
              color: open ? '#fff' : color, 
              fontWeight: 600,
              transition: 'color 0.3s ease'
            }}>
              {open ? '×' : '+'}
            </span>
          </div>
        </div>
        
        <div style={{ 
          fontSize: isMobile ? 13 : 16, 
          lineHeight: isMobile ? 1.6 : 1.8, 
          color: '#4a5568', 
          marginTop: isMobile ? 16 : 20, 
          whiteSpace: 'pre-line', 
          fontFamily: '"Open Sans", sans-serif',
          maxHeight: open ? 'none' : (isMobile ? '100px' : '120px'),
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          {open ? fullText : summary}
        </div>
        
        {!open && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }} 
            style={{ 
              marginTop: isMobile ? 18 : 24, 
              background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`, 
              color: '#fff', 
              border: 'none', 
              borderRadius: isMobile ? 10 : 12, 
              padding: isMobile ? '10px 20px' : '12px 24px', 
              fontWeight: 600, 
              fontSize: isMobile ? 13 : 14, 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 12px ${color}30`,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              fontFamily: '"Raleway", sans-serif',
              width: isMobile ? '100%' : 'auto',
              display: 'block'
            }}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = `0 6px 16px ${color}40`;
              }
            }}
            onMouseOut={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 4px 12px ${color}30`;
              }
            }}
          >
            Read More →
          </button>
        )}
      </div>
    );
  }

  return (
    <div id="about" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      padding: isMobile ? '40px 0' : '80px 0' 
    }}>
      <div className="container" style={{ padding: isMobile ? '0 15px' : '0 15px' }}>
        {/* Hero Section */}
        <div className="row" style={{ marginBottom: isMobile ? '40px' : '60px' }}>
          <div className="col-lg-12 text-center">
            <div style={{ marginBottom: isMobile ? '30px' : '50px' }}>
              <h2 style={{ 
                fontSize: isMobile ? '28px' : '48px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: isMobile ? '15px' : '20px',
                fontFamily: '"Raleway", sans-serif',
                padding: isMobile ? '0 10px' : '0',
                textAlign: 'center'
              }}>
                About BIAFEF
              </h2>
              <div style={{
                width: isMobile ? '60px' : '80px',
                height: isMobile ? '3px' : '4px',
                background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
                margin: isMobile ? '0 auto 20px' : '0 auto 30px',
                borderRadius: '2px'
              }} />
              <p style={{ 
                fontSize: isMobile ? '14px' : '20px',
                lineHeight: isMobile ? 1.6 : 1.7,
                color: '#4a5568',
                maxWidth: isMobile ? '100%' : '800px',
                margin: '0 auto',
                fontWeight: 400,
                padding: isMobile ? '0 10px' : '0'
              }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="row align-items-center" style={{ marginBottom: isMobile ? '50px' : '80px' }}>
          {isMobile ? (
            <>
              <div className="col-xs-12 col-md-6" style={{ marginBottom: '30px' }}>
                <div className="about-text-enhanced">
                  <div style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                    borderRadius: isMobile ? '16px' : '24px',
                    padding: isMobile ? '25px 20px' : '40px 30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    margin: isMobile ? '0 10px' : '0'
                  }}>
                    <h3 style={{ 
                      fontSize: isMobile ? '22px' : '28px',
                      fontWeight: 700,
                      color: '#1a202c',
                      marginBottom: isMobile ? '20px' : '30px',
                      fontFamily: '"Raleway", sans-serif',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      Why Choose Us?
                    </h3>
                    <div className="enhanced-list-style">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {props.data
                              ? props.data.Why.map((d, i) => (
                                  <li key={`${d}-${i}`} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: isMobile ? '12px' : '16px',
                                    fontSize: isMobile ? '13px' : '15px',
                                    color: '#4a5568',
                                    lineHeight: 1.6
                                  }}>
                                    <div style={{
                                      width: isMobile ? '6px' : '8px',
                                      height: isMobile ? '6px' : '8px',
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                                      marginRight: isMobile ? '10px' : '12px',
                                      flexShrink: 0,
                                      marginTop: '6px'
                                    }} />
                                    {d}
                                  </li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {props.data
                              ? props.data.Why2.map((d, i) => (
                                  <li key={`${d}-${i}`} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: isMobile ? '12px' : '16px',
                                    fontSize: isMobile ? '13px' : '15px',
                                    color: '#4a5568',
                                    lineHeight: 1.6
                                  }}>
                                    <div style={{
                                      width: isMobile ? '6px' : '8px',
                                      height: isMobile ? '6px' : '8px',
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                                      marginRight: isMobile ? '10px' : '12px',
                                      flexShrink: 0,
                                      marginTop: '6px'
                                    }} />
                                    {d}
                                  </li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div style={{ 
                  borderRadius: isMobile ? '16px' : '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  margin: isMobile ? '0 10px' : '0'
                }}>
                  <img 
                    src="img/about.jpg" 
                    className="img-responsive" 
                    alt="About BIAFEF" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(30,64,175,0.1) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-xs-12 col-md-6">
                <div style={{ 
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  position: 'relative'
                }}>
                  <img 
                    src="img/about.jpg" 
                    className="img-responsive" 
                    alt="About BIAFEF" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(30,64,175,0.1) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text-enhanced" style={{ paddingLeft: '40px' }}>
                  <div style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                    borderRadius: '24px',
                    padding: '40px 30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(255,255,255,0.8)'
                  }}>
                    <h3 style={{ 
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#1a202c',
                      marginBottom: '30px',
                      fontFamily: '"Raleway", sans-serif'
                    }}>
                      Why Choose Us?
                    </h3>
                    <div className="enhanced-list-style">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {props.data
                              ? props.data.Why.map((d, i) => (
                                  <li key={`${d}-${i}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '16px',
                                    fontSize: '15px',
                                    color: '#4a5568',
                                    lineHeight: 1.6
                                  }}>
                                    <div style={{
                                      width: '8px',
                                      height: '8px',
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                                      marginRight: '12px',
                                      flexShrink: 0
                                    }} />
                                    {d}
                                  </li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {props.data
                              ? props.data.Why2.map((d, i) => (
                                  <li key={`${d}-${i}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '16px',
                                    fontSize: '15px',
                                    color: '#4a5568',
                                    lineHeight: 1.6
                                  }}>
                                    <div style={{
                                      width: '8px',
                                      height: '8px',
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                                      marginRight: '12px',
                                      flexShrink: 0
                                    }} />
                                    {d}
                                  </li>
                                ))
                              : "loading"}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Documents Section */}
        <div style={{ marginTop: isMobile ? '40px' : '60px' }}>
          <div className="col-lg-12 text-center" style={{ marginBottom: isMobile ? '30px' : '50px' }}>
            <h3 style={{ 
              fontSize: isMobile ? '22px' : '32px',
              fontWeight: 700,
              color: '#1a202c',
              marginBottom: isMobile ? '15px' : '20px',
              fontFamily: '"Raleway", sans-serif',
              padding: isMobile ? '0 20px' : '0'
            }}>
              Important Documents
            </h3>
            <p style={{ 
              fontSize: isMobile ? '14px' : '16px',
              color: '#6b7280',
              maxWidth: isMobile ? '100%' : '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              padding: isMobile ? '0 20px' : '0'
            }}>
              Access our foundational documents and leadership communications
            </p>
          </div>

          <AccordionCard
            title="Holy Father's Mandate"
            summary={mandateSummary}
            fullText={mandateFull}
            color="#2563eb"
          />
          <AccordionCard
            title="International Chairman's Speech Address"
            summary={speechSummary}
            fullText={speechFull}
            color="#1e40af"
          />
        </div>
        
        <style>{`
          @media (max-width: 768px) {
            .about-text-enhanced {
              padding-left: 0 !important;
            }
            .enhanced-list-style .col-lg-6,
            .enhanced-list-style .col-sm-6 {
              margin-bottom: 15px;
            }
            
            #about {
              overflow-x: hidden;
            }
            
            .container {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
          }
          
          @media (max-width: 480px) {
            .about-text-enhanced > div {
              margin: 0 5px !important;
            }
            
            .enhanced-list-style .row {
              margin: 0 !important;
            }
            
            .enhanced-list-style .col-lg-6,
            .enhanced-list-style .col-sm-6,
            .enhanced-list-style .col-xs-12 {
              padding: 0 5px !important;
            }
          }
          
          @media (min-width: 769px) {
            .img-responsive:hover {
              transform: scale(1.02);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .about-text-enhanced,
          .col-xs-12 img {
            animation: fadeInUp 0.6s ease-out;
          }
          
          /* Ensure text doesn't overflow on very small screens */
          @media (max-width: 320px) {
            h2, h3 {
              word-wrap: break-word;
              hyphens: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
