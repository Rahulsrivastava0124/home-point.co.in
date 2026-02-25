import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ZoneCard from "./ZoneCard";

const API_URL = import.meta.env.VITE_API_URL;

export default function ZonesList() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/projects/zones-launches`);

        if (!response.ok) {
          throw new Error("Failed to fetch zones");
        }

        const data = await response.json();

        // Extract zones from the response array
        // API returns array of objects with zones array inside
        if (Array.isArray(data)) {
          const allZones = data.flatMap((item) => item.zones || []);
          // Filter active zones and remove duplicates by title
          const uniqueZones = allZones
            .filter((zone) => zone.active !== false)
            .filter(
              (zone, index, self) =>
                index === self.findIndex((z) => z.title === zone.title),
            )
            .map((zone) => ({
              ...zone,
              image: Array.isArray(zone.image) ? zone.image[0] : zone.image,
              count: allZones.filter((z) => z.title === zone.title).length,
            }));
          setZones(uniqueZones);
        } else if (data.data) {
          // Fallback to data.data if structure is different
          setZones(data.data);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching zones:", err);
        setError("Unable to load zones. Please try again later.");
        setZones([]);
      } finally {
        setLoading(false);
      }
    };

    fetchZones();
  }, []);

  return (
    <div className="w-full bg-slate-50 py-12 min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 mb-4 august">
            Browse by zones
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Browse trending projects in popular zones
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent"></div>
            <p className="mt-4 text-slate-600">Loading zones...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-10 max-w-md mx-auto">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        ) : zones.length === 0 ? (
          <div className="text-center py-20">
            <div className="rounded-xl border border-slate-200 bg-white px-8 py-16 max-w-md mx-auto shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-400 august mb-3">
                Coming Soon
              </h2>
              <p className="text-slate-500">
                Exciting zones will be available soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <ZoneCard key={index} zone={zone} variant="default" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
