import React from 'react';

const UserData = ({ user, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/80 group">
      <div className="flex items-start gap-4 flex-1 w-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg uppercase shrink-0">
          {user.name ? user.name[0] : 'U'}
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-800 truncate">
              {user.name || 'নাম জানা যায়নি'}
            </h3>
            {user.profession && (
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold tracking-wide">
                {user.profession}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-600">
            <div className="flex items-center gap-2 min-w-0">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="truncate selection:bg-blue-100">{user.phone}</span>
            </div>

            {user.whatsapp && (
              <div className="flex items-center gap-2 min-w-0 text-emerald-600 font-medium">
                <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="truncate">{user.whatsapp}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="truncate">
              {user.division} <span className="text-slate-300">/</span> {user.district} <span className="text-slate-300">/</span> {user.thana} 
              {user.area && <span className="text-slate-400"> ({user.area})</span>}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto flex justify-end shrink-0 border-t border-gray-50 pt-4 lg:border-t-0 lg:pt-0">
        <button
          onClick={() => onDelete(user._id || user.id)}
          className="w-full lg:w-auto px-4 py-2.5 bg-gray-50 hover:bg-rose-50 text-slate-500 hover:text-rose-600 rounded-xl text-sm font-semibold transition-all duration-200 border border-transparent hover:border-rose-100 flex items-center justify-center gap-2 active:scale-95 group-hover:bg-slate-100 lg:group-hover:bg-gray-50"
        >
          <svg className="w-4 h-4 transition-transform group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          মুছে ফেলুন
        </button>
      </div>

    </div>
  );
};

export default UserData;