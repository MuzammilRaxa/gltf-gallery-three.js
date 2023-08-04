'use client'

// components/ImageViewer.js
import { useEffect, useRef } from 'react';
import { useThree } from 'react-three-fiber';
import { useTheme } from 'next-themes';

const ImageViewer = ({ imageUrl, onClose }) => {
  const { scene, camera, gl } = useThree();
  const { resolvedTheme } = useTheme();
  const viewerRef = useRef();

  useEffect(() => {
    const handleMouseDown = (event) => event.stopPropagation();
    viewerRef.current.addEventListener('mousedown', handleMouseDown);

    return () => {
      viewerRef.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const clearColor = resolvedTheme === 'dark' ? 0x000000 : 0xffffff;
    gl.setClearColor(clearColor);
  }, [gl, resolvedTheme]);

  return (
    <div
      ref={viewerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <img src={imageUrl} alt="View Box" className="max-w-4/5 max-h-4/5" />
    </div>
  );
};

export default ImageViewer;
