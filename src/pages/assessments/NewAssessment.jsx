import React, { useState, useRef } from 'react';
import Button from '../../components/common/Button';
import LucideIcon from '../../components/common/LucideIcon';

export default function NewAssessment({ onCancel, onSubmit, triggerToast }) {
  const [step, setStep] = useState(1);

  // Form State
  const [buildingName, setBuildingName] = useState('Municipal Community Hall');
  const [buildingType, setBuildingType] = useState('Government');
  const [owner, setOwner] = useState('Vijayawada Municipal Corp.');
  const [mobile, setMobile] = useState('+91 98765 43210');
  const [address, setAddress] = useState('Benz Circle, Vijayawada');
  const [district, setDistrict] = useState('Vijayawada');
  const [block, setBlock] = useState('Vijayawada Block');
  const [ward, setWard] = useState('12');
  const [pin, setPin] = useState('520010');
  const [year, setYear] = useState('2015');
  const [floors, setFloors] = useState('2');

  // Roof & Site details state
  const [roofArea, setRoofArea] = useState('1,240');
  const [roofLength, setRoofLength] = useState('40');
  const [roofWidth, setRoofWidth] = useState('31');
  const [roofMaterial, setRoofMaterial] = useState('Reinforced concrete');
  const [roofShape, setRoofShape] = useState('Flat');
  const [roofSlope, setRoofSlope] = useState('Flat');
  const [catchmentEff, setCatchmentEff] = useState('Reinforced concrete');
  const [drainageType, setDrainageType] = useState('Reinforced concrete');
  const [soilType, setSoilType] = useState('Reinforced concrete');
  const [groundwater, setGroundwater] = useState('Reinforced concrete');
  const [landAvail, setLandAvail] = useState('Reinforced concrete');
  const [existingRwh, setExistingRwh] = useState('Reinforced concrete');

  // File Upload State
  const [images, setImages] = useState({
    roof: null,
    building: null,
    site: null,
  });

  const fileInputRefs = {
    roof: useRef(null),
    building: useRef(null),
    site: useRef(null),
  };

  const steps = [
    'Building details',
    'GPS location',
    'Roof details',
    'Site conditions',
    'Images',
    'Review',
  ];

  const stepData = {
    1: [
      'Building details',
      'Enter the basic information for this assessment site.',
      'All fields marked are required to proceed.',
    ],
    2: [
      'GPS location',
      'Confirm the exact rooftop location using live GIS coordinates.',
      'Map pin, satellite imagery, and coordinate accuracy are ready for capture.',
    ],
    3: [
      'Roof details',
      'Capture the rooftop dimensions and catchment characteristics.',
      'Roof area &bull; 1,240 sq ft &nbsp;&nbsp; Material &bull; Reinforced concrete',
    ],
    4: [
      'Site conditions',
      'Record groundwater and soil conditions for the AI recommendation.',
      'Soil type &bull; Loamy &nbsp;&nbsp; Groundwater level &bull; 18.6 m',
    ],
    5: [
      'Site images',
      'Upload clear images for AI validation and automated report evidence.',
      '',
    ],
    6: [
      'Review assessment',
      'Review all captured information before submitting the assessment.',
      '',
    ],
  };

  const currentStepInfo = stepData[step];

  const handleToast = (msg) => {
    if (triggerToast) triggerToast(msg);
  };

  const handleFileClick = (key) => {
    if (fileInputRefs[key].current) {
      fileInputRefs[key].current.click();
    }
  };

  const handleFileChange = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => ({ ...prev, [key]: url }));
      handleToast(`Selected ${file.name} for ${key} photo.`);
    }
  };

  const handleRemoveImage = (key, e) => {
    e.stopPropagation();
    setImages((prev) => ({ ...prev, [key]: null }));
    handleToast(`Removed ${key} photo.`);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <label>
              Building name
              <input
                value={buildingName}
                onChange={(e) => setBuildingName(e.target.value)}
                placeholder="e.g. Municipal Community Hall"
              />
            </label>
            <label>
              Building type
              <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
                <option value="Select building type">Select building type</option>
                <option value="Government">Government</option>
                <option value="Educational">Educational</option>
              </select>
            </label>
            <label>
              Owner / organisation
              <input
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Enter owner name"
              />
            </label>
            <label>
              Mobile number
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 00000 00000"
              />
            </label>
            <label className="wide">
              Site address
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete address"
              />
            </label>
            <label>
              District
              <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                <option value="Vijayawada">Vijayawada</option>
              </select>
            </label>
            <label>
              Block
              <select value={block} onChange={(e) => setBlock(e.target.value)}>
                <option value="Select block">Select block</option>
                <option value="Vijayawada Block">Vijayawada Block</option>
              </select>
            </label>
            <label>
              Ward
              <input
                value={ward}
                onChange={(e) => setWard(e.target.value)}
                placeholder="Enter ward number"
              />
            </label>
            <label>
              PIN code
              <input
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="520010"
              />
            </label>
            <label>
              Construction year
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g. 2015"
              />
            </label>
            <label>
              Number of floors
              <select value={floors} onChange={(e) => setFloors(e.target.value)}>
                <option value="Select floors">Select floors</option>
                <option value="1">1 floor</option>
                <option value="2">2 floors</option>
                <option value="3">3 floors</option>
              </select>
            </label>
          </form>
        );

      case 2:
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '20px' }}>
            <div className="map-canvas" style={{ height: '370px' }}>
              <span className="pin one">
                <i>
                  <LucideIcon name="map-pin" />
                </i>
              </span>
              <span className="pin two">
                <i>
                  <LucideIcon name="map-pin" />
                </i>
              </span>
              <span className="pin three">
                <i>
                  <LucideIcon name="map-pin" />
                </i>
              </span>
              <div className="map-tools">
                <button type="button" onClick={() => handleToast('Zooming in GIS map...')}>
                  <LucideIcon name="plus" />
                </button>
                <button type="button" onClick={() => handleToast('Zooming out GIS map...')}>
                  <LucideIcon name="minus" />
                </button>
                <button type="button" onClick={() => handleToast('Changing map layers...')}>
                  <LucideIcon name="layers" />
                </button>
              </div>
              <div className="map-card">
                <b>Municipal Community Hall</b>
                <p>16.5062° N, 80.6480° E • Accuracy 5.2 m</p>
                <span className="status done">GPS locked</span>
              </div>
            </div>
            <div className="card" style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>GIS Site Coordinates</h4>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600 }}>
                  Search location
                  <input
                    placeholder="Search address..."
                    style={{ width: '100%', height: '32px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 8px', marginTop: '4px', outlineColor: '#0f766e' }}
                  />
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontWeight: 600 }}>
                    Latitude
                    <input value="16.5062° N" readOnly style={{ width: '100%', height: '30px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 8px', marginTop: '4px', background: '#f8fafc' }} />
                  </label>
                  <label style={{ fontSize: '10px', fontWeight: 600 }}>
                    Longitude
                    <input value="80.6480° E" readOnly style={{ width: '100%', height: '30px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 8px', marginTop: '4px', background: '#f8fafc' }} />
                  </label>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontWeight: 600 }}>
                    Elevation
                    <input value="14 m" readOnly style={{ width: '100%', height: '30px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 8px', marginTop: '4px', background: '#f8fafc' }} />
                  </label>
                  <label style={{ fontSize: '10px', fontWeight: 600 }}>
                    Accuracy
                    <input value="5.2 m" readOnly style={{ width: '100%', height: '30px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 8px', marginTop: '4px', background: '#f8fafc' }} />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <Button variant="secondary" style={{ padding: '6px 10px', fontSize: '11px' }} onClick={() => handleToast('Locating current coordinate...')}>
                    Locate me
                  </Button>
                  <Button variant="primary" style={{ padding: '6px 10px', fontSize: '11px' }} onClick={() => handleToast('Live location saved.')}>
                    Save location
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
      case 4:
        return (
          <div className="form-grid">
            <label>
              Roof area (sq ft)
              <input value={roofArea} onChange={(e) => setRoofArea(e.target.value)} placeholder="Enter value" />
            </label>
            <label>
              Roof length (ft)
              <input value={roofLength} onChange={(e) => setRoofLength(e.target.value)} placeholder="Enter value" />
            </label>
            <label>
              Roof width (ft)
              <input value={roofWidth} onChange={(e) => setRoofWidth(e.target.value)} placeholder="Enter value" />
            </label>
            <label>
              Roof material
              <select value={roofMaterial} onChange={(e) => setRoofMaterial(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Roof shape
              <select value={roofShape} onChange={(e) => setRoofShape(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Roof slope
              <select value={roofSlope} onChange={(e) => setRoofSlope(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Catchment efficiency
              <select value={catchmentEff} onChange={(e) => setCatchmentEff(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Drainage type
              <select value={drainageType} onChange={(e) => setDrainageType(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Soil type
              <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Groundwater level
              <select value={groundwater} onChange={(e) => setGroundwater(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Land availability
              <select value={landAvail} onChange={(e) => setLandAvail(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
            <label>
              Existing RWH system
              <select value={existingRwh} onChange={(e) => setExistingRwh(e.target.value)}>
                <option value="Select option">Select option</option>
                <option value="Reinforced concrete">Reinforced concrete</option>
              </select>
            </label>
          </div>
        );

      case 5:
        const fileUploads = [
          { key: 'roof', name: 'Roof photo' },
          { key: 'building', name: 'Building photo' },
          { key: 'site', name: 'Site photo' },
        ];
        return (
          <div className="upload-grid">
            {fileUploads.map((up) => (
              <div
                key={up.key}
                className="upload"
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  backgroundImage: images[up.key] ? `url(${images[up.key]})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '142px',
                }}
                onClick={() => handleFileClick(up.key)}
              >
                <input
                  type="file"
                  ref={fileInputRefs[up.key]}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={(e) => handleFileChange(up.key, e)}
                />
                {!images[up.key] ? (
                  <>
                    <LucideIcon name="upload-cloud" />
                    <b>{up.name}</b>
                    <small>Drag & drop or browse files</small>
                  </>
                ) : (
                  <button
                    type="button"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(239, 68, 68, 0.9)',
                      color: 'white',
                      border: '0',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                    onClick={(e) => handleRemoveImage(up.key, e)}
                  >
                    <LucideIcon name="trash-2" style={{ width: '13px', color: '#fff' }} />
                  </button>
                )}
              </div>
            ))}
          </div>
        );

      case 6:
        const reviewItems = [
          ['Building', buildingName],
          ['Owner', owner],
          ['Location', address],
          ['Roof area', `${roofArea} sq ft`],
          ['Roof material', 'RCC concrete'],
          ['Groundwater', '18.6 m below ground'],
          ['Soil', 'Loamy'],
          ['Existing system', 'None'],
          ['Estimated harvest', '1,18,400 L / year'],
        ];
        return (
          <div className="review-grid">
            {reviewItems.map((item, idx) => (
              <div key={idx} className="summary-item">
                <small>{item[0]}</small>
                <b>{item[1]}</b>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page">
      <div className="assessment-head">
        <button className="back" onClick={onCancel}>
          <LucideIcon name="arrow-left" />
          Dashboard
        </button>
        <h2>New rooftop assessment</h2>
        <p>Capture site data to generate a detailed water harvesting recommendation.</p>
      </div>

      <div className="steps">
        {steps.map((x, i) => (
          <React.Fragment key={i}>
            <div className={`step ${i + 1 === step ? 'active' : ''}`}>
              <b>{i + 1}</b>
              <span>{x}</span>
            </div>
            {i < 5 && <i></i>}
          </React.Fragment>
        ))}
      </div>

      <article className="form-card">
        <div>
          <h3>{currentStepInfo[0]}</h3>
          <p dangerouslySetInnerHTML={{ __html: currentStepInfo[2] }}></p>
        </div>

        {renderContent()}

        <div className="form-footer">
          <span>
            {step === 1
              ? 'All fields marked are required to proceed.'
              : `Step ${step} of 6 • Your progress is saved automatically.`}
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            {step > 1 && (
              <Button variant="secondary" icon="arrow-left" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button
              variant="primary"
              icon={step === 6 ? 'check' : 'arrow-right'}
              iconPosition="right"
              onClick={() => {
                if (step < 6) {
                  setStep(step + 1);
                } else {
                  onSubmit();
                }
              }}
            >
              {step === 6 ? 'Submit assessment' : 'Continue'}
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
