export default function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold text-red-600">01.08.2024</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Fête du 1 er août - Rejoignez nous le soir du 1 er août 2024
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  );
}
