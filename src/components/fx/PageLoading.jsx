// Shown only while a page whose slug we do not ship waits on the CMS.
// A page with bundled content renders straight away and never reaches this.
export default function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-ink/15 border-t-lime" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
