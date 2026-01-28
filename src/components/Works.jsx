import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Typewriter from "./Typewriter";
import { myProjects, futureProjects } from "../constants";

// ==================== TAG COLOR HELPER ====================
const tagColorPalette = [
  { bg: "bg-violet-500/15", text: "text-violet-200", border: "border-violet-400/25" },
  { bg: "bg-cyan-500/15", text: "text-cyan-200", border: "border-cyan-400/25" },
  { bg: "bg-emerald-500/15", text: "text-emerald-200", border: "border-emerald-400/25" },
  { bg: "bg-amber-500/15", text: "text-amber-200", border: "border-amber-400/25" },
  { bg: "bg-pink-500/15", text: "text-pink-200", border: "border-pink-400/25" },
  { bg: "bg-indigo-500/15", text: "text-indigo-200", border: "border-indigo-400/25" },
  { bg: "bg-lime-500/15", text: "text-lime-200", border: "border-lime-400/25" },
  { bg: "bg-orange-500/15", text: "text-orange-200", border: "border-orange-400/25" },
  { bg: "bg-sky-500/15", text: "text-sky-200", border: "border-sky-400/25" },
  { bg: "bg-rose-500/15", text: "text-rose-200", border: "border-rose-400/25" },
];

const getTagColor = (tag) => {
  const hash = tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return tagColorPalette[hash % tagColorPalette.length];
};

// ==================== MAIN COMPONENT ====================
const Works = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    myProjects.forEach((p) =>
      p.tags.forEach((t) => tags.add(t.startsWith("#") ? t.substring(1) : t))
    );
    return Array.from(tags).sort();
  }, []);

  // Difficulty config
  const difficulties = [
    { name: "Beginner", styles: "bg-emerald-500/15 text-emerald-200 border-emerald-400/25", activeStyles: "bg-emerald-500/30 border-emerald-400/50" },
    { name: "Intermediate", styles: "bg-sky-500/15 text-sky-200 border-sky-400/25", activeStyles: "bg-sky-500/30 border-sky-400/50" },
    { name: "Advanced", styles: "bg-orange-500/15 text-orange-200 border-orange-400/25", activeStyles: "bg-orange-500/30 border-orange-400/50" },
  ];

  // Filter + Sort
  const filteredProjects = useMemo(() => {
    let result = [...myProjects];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedDifficulties.length > 0) {
      result = result.filter((p) => selectedDifficulties.includes(p.category));
    }

    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        p.tags.some((t) => {
          const clean = t.startsWith("#") ? t.substring(1) : t;
          return selectedTags.includes(clean);
        })
      );
    }

    switch (sortOption) {
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "difficulty":
        const order = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        result.sort((a, b) => (order[a.category] || 0) - (order[b.category] || 0));
        break;
    }

    return result;
  }, [searchQuery, sortOption, selectedDifficulties, selectedTags]);

  const toggleDifficulty = (d) =>
    setSelectedDifficulties((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );

  const toggleTag = (t) =>
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setSortOption("name-asc");
  };

  const hasFilters = searchQuery || selectedDifficulties.length > 0 || selectedTags.length > 0;

  return (
    <section className="pt-10 md:pt-14 pb-20" id="projects">
      <div className="max-w-6xl mx-auto px-4 space-y-6 md:space-y-8">

        {/* ==================== HEADER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent drop-shadow">
            🚀 Projects
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my favorite projects, spanning AI, data science, and full-stack development.
            <br />
            <span className="text-slate-400">
              Each project reflects my passion for building intelligent, impactful solutions.
            </span>
          </p>
        </motion.div>

        {/* ==================== CONTROLS SECTION - CLEAN DESIGN ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Search Bar - Full Width */}
          <div className="relative max-w-4xl mx-auto">
            <input
              id="search"
              type="text"
              placeholder="Search projects by title, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: "8px",
                padding: "14px 48px 14px 16px",
                fontSize: "14px",
                color: "#ffffff",
                outline: "none",
              }}
            />
            <Search
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "18px",
                height: "18px",
                color: "#64748b"
              }}
            />
          </div>

          {/* Sort + Advanced Button Row */}
          <div className="flex flex-wrap items-center gap-3 max-w-4xl mx-auto">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{
                  appearance: "none",
                  background: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  borderRadius: "8px",
                  padding: "10px 40px 10px 16px",
                  fontSize: "14px",
                  color: "#ffffff",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
                <option value="difficulty">Difficulty ↑</option>
              </select>
              <ChevronDown
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#64748b",
                  pointerEvents: "none"
                }}
              />
            </div>

            {/* Show Advanced Button */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              style={{
                background: showAdvanced ? "rgba(139, 92, 246, 0.2)" : "rgba(30, 41, 59, 0.5)",
                border: showAdvanced ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "14px",
                color: showAdvanced ? "#a78bfa" : "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <SlidersHorizontal style={{ width: "16px", height: "16px" }} />
              {showAdvanced ? "Hide Advanced" : "Show Advanced"}
            </button>

            {/* Clear Filters */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "10px 16px",
                  fontSize: "14px",
                  color: "#f87171",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <X style={{ width: "14px", height: "14px" }} />
                Clear filters
              </button>
            )}
          </div>

          {/* Showing X of Y */}
          <div className="text-center">
            <span style={{ fontSize: "14px", color: "#94a3b8" }}>
              Showing <span style={{ color: "#a78bfa", fontWeight: 500 }}>{filteredProjects.length}</span> of{" "}
              <span style={{ color: "#e2e8f0" }}>{myProjects.length}</span> projects
            </span>
          </div>
        </motion.div>

        {/* ==================== ADVANCED FILTERS PANEL ==================== */}
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4 md:p-5 bg-slate-900/40 border border-white/10 space-y-4"
          >
            {/* Difficulty */}
            <div>
              <h4 className="text-sm font-bold tracking-wider text-slate-200 uppercase mb-3">
                Difficulty Level
              </h4>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => {
                  const isActive = selectedDifficulties.includes(d.name);
                  return (
                    <button
                      key={d.name}
                      onClick={() => toggleDifficulty(d.name)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${isActive ? d.activeStyles : d.styles
                        } ${isActive ? "" : "hover:opacity-80"}`}
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold tracking-wider text-slate-200 uppercase mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {allTags.map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  const c = getTagColor(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${isActive
                        ? `${c.bg} ${c.text} ${c.border} ring-1 ring-white/20`
                        : `bg-slate-800/40 text-slate-400 border-slate-600/30 hover:${c.bg} hover:${c.text}`
                        }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================== PROJECTS GRID ==================== */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No projects found.</p>
            <button
              onClick={clearFilters}
              className="mt-3 text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
            >
              Clear filters and try again
            </button>
          </div>
        )}

        {/* ==================== SEPARATOR ==================== */}
        <div className="py-12 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </div>

        {/* ==================== FUTURE PROJECTS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-10"
        >
          <div className="flex justify-center mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
              }}
            >
              <Typewriter
                words={["Future Projects", "Upcoming Work", "What's Next", "Future Projects"]}
                typingSpeed={120}
                deletingSpeed={80}
                delay={2000}
              />
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Tech stacks and domains I'm actively exploring to expand my AI engineering expertise.
          </p>
        </motion.div>

        <div className="projects-grid">
          {futureProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;