interface ResumeViewerProps {
  onBack?: () => void;
}

export default function ResumeViewer({ onBack }: ResumeViewerProps) {
  return (
    <div className="flex flex-col gap-4">
      {onBack && (
        <button
          onClick={onBack}
          className="text-indigo-400 hover:text-indigo-300 text-sm transition w-fit"
        >
          ← Back
        </button>
      )}
      <h2 className="text-4xl font-bold text-white">Resume</h2>
      <div className="rounded-lg border border-gray-700/40 bg-gray-900/40 p-4 space-y-2 min-w-0">
          <a
            href="/Aruv_Dand_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-white visited:text-white text-sm underline decoration-indigo-300 decoration-2 underline-offset-4 hover:decoration-indigo-200 hover:bg-indigo-500/15 rounded px-1 transition-colors inline-flex items-center gap-1"
        >
          <span>Open in new tab</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="inline">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
        <div className="w-full max-w-full max-w-screen overflow-x-hidden">
            <object
              data="/Aruv_Dand_resume.pdf"
              type="application/pdf"
            className="block w-full max-w-full rounded h-[110vh] sm:h-[120vh] md:h-[140vh] lg:h-[160vh]"
              aria-label="Resume PDF"
            style={{ maxWidth: '100vw' }}
            >
              <p className="text-gray-300 text-sm">Unable to load PDF</p>
            </object>
          </div>
      </div>
    </div>
  )
}
