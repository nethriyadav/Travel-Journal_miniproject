import React from "react";

function SearchBar() {
  return (
    <div className="relative max-sm:hidden">
      <div className="relative">
        <input
          type="text"
          placeholder="Search journal entries..."
          className="px-8 h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-600 w-[260px]"
        />
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;4:267&quot; layer-name=&quot;SVG&quot; width=&quot;17&quot; height=&quot;16&quot; viewBox=&quot;0 0 17 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;absolute left-[10px] top-[12px] w-[16px] h-[16px]&quot;> <path d=&quot;M8.30306 12.6667C11.2486 12.6667 13.6364 10.2789 13.6364 7.33333C13.6364 4.38781 11.2486 2 8.30306 2C5.35754 2 2.96973 4.38781 2.96973 7.33333C2.96973 10.2789 5.35754 12.6667 8.30306 12.6667Z&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;1.33333&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M14.9697 14L12.103 11.1333&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;1.33333&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
