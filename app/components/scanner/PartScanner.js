'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import CTAButton from '../CTAButton';

export default function PartScanner({ onScanResult }) {
  const { t, language } = useLanguage();
  const { track } = useAnalytics();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [availableCameras, setAvailableCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');

  // Get available cameras
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      setError('Camera API not supported');
      return;
    }

    async function getCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setAvailableCameras(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedCamera(videoDevices[0].deviceId);
        }
      } catch (err) {
        setError('Error accessing cameras: ' + err.message);
      }
    }

    getCameras();
  }, []);

  // Start/stop camera
  const toggleScanner = async () => {
    if (isScanning) {
      stopScanner();
      return;
    }

    setError(null);
    setIsScanning(true);
    track('scanner_started', { page: 'part_scanner' });

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasPermission(true);
      }
    } catch (err) {
      setError('Camera access denied: ' + err.message);
      setIsScanning(false);
      setHasPermission(false);
      track('scanner_error', { error: err.message });
    }
  };

  const stopScanner = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  // Capture frame and process
  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current || !isScanning) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get image data for processing
    const imageData = canvas.toDataURL('image/jpeg');

    // In a real app, we would send this to a server for OCR/ML processing
    // For demo, we'll simulate recognition with Malaysian vehicle part data
    simulatePartRecognition(imageData);
  };

  // Simulate part recognition (in a real app, this would be an API call to ML service)
  const simulatePartRecognition = (imageData) => {
    // Simulate processing delay
    setError(null);
    setScanResult({ status: 'processing' });
    
    setTimeout(() => {
      // Simulate recognized parts based on Malaysian vehicle manuals
      const recognizedParts = [
        {
          id: 'P12345',
          name: language === 'ms' ? 'Penapis Minyak' : 'Oil Filter',
          compatibility: ['Proton Saga', 'Proton Persona', 'Perodua Myvi'],
          partNumber: 'MY-OIL-FLT-1234',
          price: 'RM 35 - RM 45',
          availability: true
        },
        {
          id: 'P67890',
          name: language === 'ms' ? 'Pad Brek' : 'Brake Pad',
          compatibility: ['Honda EX5', 'Yamaha LC135', 'Modenas Kriss'],
          partNumber: 'MY-BRK-PAD-5678',
          price: 'RM 50 - RM 80',
          availability: true
        }
      ];

      setScanResult({
        status: 'success',
        parts: recognizedParts,
        image: imageData
      });

      track('part_recognized', { 
        parts_count: recognizedParts.length,
        part_types: recognizedParts.map(p => p.name).join(',')
      });

      if (onScanResult) {
        onScanResult(recognizedParts);
      }
    }, 2000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">
        {language === 'ms' ? 'Pengimbas Alat Ganti' : 'Parts Scanner'}
      </h2>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {language === 'ms' ? 'Pilih Kamera' : 'Select Camera'}
        </label>
        <select
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          disabled={isScanning}
        >
          {availableCameras.map((camera) => (
            <option key={camera.deviceId} value={camera.deviceId}>
              {camera.label || `Camera ${availableCameras.indexOf(camera) + 1}`}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mb-4 bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-64 object-cover"
          autoPlay
          playsInline
          muted
        />
        {isScanning && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 opacity-70 animate-pulse"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-500 opacity-70 animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-primary-400 rounded-lg"></div>
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <CTAButton
          text={isScanning ? (language === 'ms' ? 'Hentikan' : 'Stop') : (language === 'ms' ? 'Mulakan Kamera' : 'Start Camera')}
          onClick={toggleScanner}
          variant={isScanning ? 'danger' : 'primary'}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          }
        />
        {isScanning && (
          <CTAButton
            text={language === 'ms' ? 'Imbas Alat Ganti' : 'Scan Part'}
            onClick={captureFrame}
            variant="gradient"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1zM13 12a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zm1 2v1h1v-1h-1z" clipRule="evenodd" />
              </svg>
            }
          />
        )}
      </div>

      {scanResult && scanResult.status === 'processing' && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 mr-3"></div>
          <p>{language === 'ms' ? 'Memproses imej...' : 'Processing image...'}</p>
        </div>
      )}

      {scanResult && scanResult.status === 'success' && (
        <div className="mt-4">
          <h3 className="font-medium text-lg mb-2">
            {language === 'ms' ? 'Alat Ganti Dikesan' : 'Parts Detected'}
          </h3>
          <div className="space-y-3">
            {scanResult.parts.map((part) => (
              <div key={part.id} className="border rounded-md p-3 bg-gray-50">
                <div className="flex justify-between">
                  <h4 className="font-medium">{part.name}</h4>
                  <span className="text-green-600 text-sm">
                    {part.availability ? 
                      (language === 'ms' ? 'Tersedia' : 'Available') : 
                      (language === 'ms' ? 'Tiada Stok' : 'Out of Stock')}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'ms' ? 'No. Bahagian: ' : 'Part Number: '} 
                  <span className="font-mono">{part.partNumber}</span>
                </p>
                <p className="text-sm text-gray-600">
                  {language === 'ms' ? 'Keserasian: ' : 'Compatibility: '} 
                  {part.compatibility.join(', ')}
                </p>
                <p className="text-sm font-medium mt-1">{part.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}