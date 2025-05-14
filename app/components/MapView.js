'use client';

import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mock Mapbox token - in a real app, this would be an environment variable
mapboxgl.accessToken = 'pk.mock.mapbox.token';

export default function MapView({ markers = [], center = [101.6869, 3.1390], zoom = 10 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom
    });

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    // Clean up on unmount
    return () => map.current?.remove();
  }, [center, zoom]);

  // Add markers when map is loaded or markers change
  useEffect(() => {
    if (!mapLoaded || !map.current) return;
    
    // Remove existing markers
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker');
    existingMarkers.forEach(marker => marker.remove());
    
    // Add new markers
    markers.forEach(marker => {
      const { lat, lng, title, description } = marker;
      
      // Create marker element
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(/icons/marker.png)';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.backgroundSize = '100%';
      
      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${title}</h3><p>${description}</p>`);
      
      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map.current);
    });
  }, [mapLoaded, markers]);

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-[400px] rounded-lg" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
    </div>
  );
}