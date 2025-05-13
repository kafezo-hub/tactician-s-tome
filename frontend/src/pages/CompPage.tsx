import React from 'react';
import { useParams } from 'react-router-dom';

const CompPage: React.FC = () => {
  const { compId } = useParams<{ compId: string }>();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Details for Team Composition: {compId}</h1>
      {/* Placeholder for detailed comp information */}
      <p className="text-lg text-gray-700">
        This page will show specific details about {compId}, including units, items, and strategy.
      </p>
      {/* Future: Add sections for units, items, strategy, etc. */}
    </div>
  );
};

export default CompPage;