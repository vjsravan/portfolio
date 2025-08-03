import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-200 text-center">
      © {new Date().getFullYear()} Jay Sravan. All rights reserved.
    </footer>
  );
}
