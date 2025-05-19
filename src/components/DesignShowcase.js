import React from 'react';
import AnimatedLink from './AnimatedLink';

const DesignShowcase = () => {
  return (
    <section className="section showcase-section">
      <div className="container">
        <div className="section-title">
          <h2 className="fade-in">Design Showcase</h2>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card mb-4 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-body">
                <h3>Typography</h3>
                <div className="mt-4">
                  <h1>Helvetica World Headline</h1>
                  <p className="subheadline">Garet Subheadline Sample</p>
                  <p>This is a paragraph in Poppins font. It demonstrates the typography used throughout the website.</p>
                </div>
              </div>
            </div>
            
            <div className="card mb-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="card-body">
                <h3>Color Theme</h3>
                <div className="mt-4 d-flex">
                  <div style={{ width: '80px', height: '80px', backgroundColor: '#e82124', borderRadius: '4px', marginRight: '15px' }}></div>
                  <div>
                    <p className="mb-0"><strong>Primary Color</strong></p>
                    <p className="mb-0">#e82124</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card mb-4 slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="card-body">
                <h3>Interactive Elements</h3>
                
                <div className="mt-4">
                  <h4>Animated Links</h4>
                  <AnimatedLink to="/">Home</AnimatedLink> &nbsp; | &nbsp;
                  <AnimatedLink to="/about-us">About Us</AnimatedLink> &nbsp; | &nbsp;
                  <AnimatedLink to="/contact">Contact</AnimatedLink>
                </div>
                
                <div className="mt-4">
                  <h4>Buttons</h4>
                  <button className="btn btn-primary mr-2 ai-pointer">Primary Button</button>
                  <button className="btn btn-outline-primary ai-pointer" style={{ marginLeft: '10px' }}>Outline Button</button>
                </div>
                
                <div className="mt-4">
                  <h4>Cursor Effects</h4>
                  <div className="d-flex flex-wrap">
                    <div className="me-3 mb-2 ai-pointer" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      Hover Me (AI Pointer)
                    </div>
                    <div className="me-3 mb-2 cursor-help" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      Help Cursor
                    </div>
                    <div className="me-3 mb-2 cursor-wait" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      Wait Cursor
                    </div>
                    <div className="me-3 mb-2 cursor-not-allowed" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      Not Allowed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase; 