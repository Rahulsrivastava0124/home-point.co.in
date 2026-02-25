import React, { useState, useEffect } from "react";

export default function Career() {
  const API_URL = import.meta.env.VITE_API_URL || "";
  const [expandedJob, setExpandedJob] = useState(null);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/careers`);

        if (!response.ok) {
          throw new Error("Failed to fetch careers");
        }

        const data = await response.json();

        // Transform API data to component format
        const transformedJobs = (
          Array.isArray(data) ? data : data.data || []
        ).map((job) => ({
          id: job._id,
          title: job.position,
          location: job.location,
          type: job.job_type,
          experience: job.experience_level,
          salary: job.salary_range,
          department: job.department,
          description: job.description,
          qualifications: job.requirements || [],
          endingDate: job.ending_date,
          is_active: job.is_active,
        }));

        setJobOpenings(transformedJobs);
        setError(null);
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Unable to load job openings. Please try again later.");
        setJobOpenings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getDaysRemaining = (dateString) => {
    if (!dateString) return null;
    const endDate = new Date(dateString);
    const today = new Date();
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="w-full bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Current Job Openings
          </h2>

          {loading ? (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-10 text-center">
              <p className="text-base text-slate-600">
                Loading job openings...
              </p>
            </div>
          ) : error ? (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-10 text-center">
              <p className="text-base text-red-700">{error}</p>
            </div>
          ) : jobOpenings.length === 0 ? (
            <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 px-4 py-10 text-center">
              <p className="text-base text-teal-700">
                No job openings available at the moment. Please check back soon!
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-300 hover:shadow-md"
                >
                  <div
                    className="flex cursor-pointer items-start justify-between gap-4 p-5 sm:p-6"
                    onClick={() => toggleJobDetails(job.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                          {job.title}
                        </h3>
                        {job.endingDate &&
                          getDaysRemaining(job.endingDate) <= 7 &&
                          getDaysRemaining(job.endingDate) >= 0 && (
                            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 whitespace-nowrap">
                              {getDaysRemaining(job.endingDate) === 0
                                ? "Last Day"
                                : `${getDaysRemaining(job.endingDate)} days left`}
                            </span>
                          )}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        <span className="inline-flex items-center">
                          📍 {job.location}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                          {job.type}
                        </span>
                        <span className="text-slate-600">
                          Experience: {job.experience}
                        </span>
                        {job.salary && (
                          <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-800">
                            ₹ {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-1 text-lg text-indigo-600">
                      {expandedJob === job.id ? "▼" : "▶"}
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="border-t border-slate-200 px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-sm sm:text-base text-slate-600">
                        {job.description}
                      </p>

                      {job.department && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-slate-900">
                            Department:
                          </h4>
                          <p className="text-sm text-slate-600">
                            {job.department}
                          </p>
                        </div>
                      )}

                      {job.qualifications && job.qualifications.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-slate-900">
                            Requirements:
                          </h4>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                            {job.qualifications.map((requirement, idx) => (
                              <li key={idx}>{requirement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.endingDate && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-slate-900">
                            Application Deadline:
                          </h4>
                          <p className="text-sm text-slate-600">
                            {formatDate(job.endingDate)}
                          </p>
                        </div>
                      )}

                      <button className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-indigo-600 hover:to-purple-700">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
