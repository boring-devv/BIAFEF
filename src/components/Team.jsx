import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            The BIAFEF executive team is dedicated to fostering excellence, professionalism, and support for all members. Meet the leaders who drive our mission forward.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="team-card">
                    <div className="team-img-container">
                      <img src={d.img} alt={d.name} className="team-img" />
                      <div className="team-overlay">
                        <div className="team-overlay-content">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                          {d.phone && (
                            <p style={{marginBottom: 0}}><strong>Tel:</strong> {d.phone}</p>
                          )}
                          {d.email && (
                            <p style={{marginBottom: 0}}><strong>Email:</strong> {d.email}</p>
                          )}
                          <div className="team-socials">
                            {d.facebook && (
                              <a href={d.facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                            )}
                            {d.twitter && (
                              <a href={d.twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                            )}
                            {d.linkedin && (
                              <a href={d.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
