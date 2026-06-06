"use client";

import React from 'react';
import { MdPhone, MdLocationOn, MdPlayArrow, MdCheckCircle, MdCancel } from 'react-icons/md';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

const UserData = ({ user, index, onStatusUpdate }) => {
  const getLocalDateFromId = (id) => {
    if (!id || id.length !== 24) return "N/A";
    try {
      const timestamp = parseInt(id.substring(0, 8), 16) * 1000;
      const createdDate = new Date(timestamp);
      const offset = createdDate.getTimezoneOffset() * 60000;
      return new Date(createdDate.getTime() - offset).toISOString().split('T')[0];
    } catch (e) {
      return "N/A";
    }
  };

  const userId = user._id || user.id;
  const joinDate = getLocalDateFromId(userId);
  const generatedUserId = userId ? `USR-${userId.substring(0, 10).toUpperCase()}` : `USR-2026${index}`;

  const currentStatus = (user.status || "PENDING").trim().toUpperCase();
  const isPending = currentStatus === "PENDING" || currentStatus === "NEW";
  const isProcessing = currentStatus === "PROCESSING";
  const isCancelled = currentStatus === "CANCELLED";
  const isCompleted = currentStatus === "COMPLETED";

  return (
    <tr className="hover:bg-neutral-950/60 transition-all border-b border-neutral-900 text-xs text-neutral-400 group">
      <td className="p-4 w-12" onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" className="rounded bg-neutral-950 border-neutral-800 text-white focus:ring-0 cursor-pointer" />
      </td>
      <td className="p-4 font-mono font-medium text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
        <span>{generatedUserId}</span>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[9px] font-bold text-white uppercase">
              {user.name ? user.name[0] : 'U'}
            </div>
            <span className="text-white font-semibold tracking-wide">{user.name || 'নাম জানা যায়নি'}</span>
          </div>
          <div className="text-neutral-500 flex items-center gap-1.5 font-mono text-[11px] pl-6">
            <MdPhone size={12} className="text-neutral-600" /> 
            <span className="select-all">{user.phone || "N/A"}</span>
          </div>
          {user.whatsapp && (
            <div className="text-emerald-500 flex items-center gap-1.5 font-mono text-[11px] pl-6">
              <FaWhatsapp size={12} /> 
              <span className="select-all">{user.whatsapp}</span>
            </div>
          )}
        </div>
      </td>
      <td className="p-4 whitespace-nowrap">
        {user.profession ? (
          <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded text-[10px] font-bold font-mono uppercase tracking-wider">
            {user.profession}
          </span>
        ) : (
          <span className="text-neutral-700 font-mono">-</span>
        )}
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-white font-medium">
            <MdLocationOn className="text-neutral-500" size={13} />
            <span>{user.district || "N/A"}</span>
          </div>
          <p className="text-neutral-500 max-w-[180px] truncate text-[11px]" title={user.thana}>
            {user.thana || "N/A"} {user.area && `(${user.area})`}
          </p>
          <span className="inline-block px-1.5 py-0.5 bg-neutral-950 border border-neutral-800 text-[8px] font-bold font-mono rounded text-neutral-400 uppercase">
            {user.division || "N/A"}
          </span>
        </div>
      </td>

      <td className="p-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span className={`px-2 py-0.5 rounded border text-[9px] font-bold font-mono tracking-wider uppercase ${
            isPending
              ? "bg-amber-500/5 text-amber-400 border-amber-500/20" 
              : isProcessing
              ? "bg-blue-500/5 text-blue-400 border-blue-500/20"
              : isCompleted
              ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
              : isCancelled
              ? "bg-red-500/5 text-red-400 border-red-500/20"
              : "bg-neutral-900 text-neutral-500 border-neutral-800"
          }`}>
            {currentStatus}
          </span>
          
     
          {isPending && (
            <button
              onClick={() => onStatusUpdate(userId, "PROCESSING", "আবেদনটি প্রসেসিং এ পাঠানো হয়েছে!")}
              className="flex items-center gap-1 text-[9px] font-bold text-neutral-400 hover:text-blue-400 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 px-2 py-0.5 rounded-md transition-all active:scale-95"
            >
              <MdPlayArrow size={11} className="text-neutral-500" />
              Process
            </button>
          )}
          {isProcessing && (
            <button
              onClick={() => onStatusUpdate(userId, "COMPLETED", "আবেদনটি সফলভাবে সম্পন্ন হয়েছে!")}
              className="flex items-center gap-1 text-[9px] font-bold text-neutral-400 hover:text-emerald-400 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/30 px-2 py-0.5 rounded-md transition-all active:scale-95"
            >
              <MdCheckCircle size={11} className="text-neutral-500" />
              Complete
            </button>
          )}
        </div>
      </td>

      <td className="p-4 text-right whitespace-nowrap font-mono text-neutral-500">
        <div className="flex items-center justify-end gap-1 text-[11px]">
          <FaCalendarAlt size={10} className="text-neutral-600" />
          <span>{joinDate}</span>
        </div>
      </td>
      
      <td className="p-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center">
          {!isCancelled ? (
            <button 
              onClick={() => {
                if (window.confirm('আপনি কি নিশ্চিত যে এই আবেদনটি বাতিল (Cancel) করতে চান?')) {
                  onStatusUpdate(userId, "CANCELLED", "আবেদনটি বাতিল করা হয়েছে!");
                }
              }}
              className="p-2 bg-neutral-950 hover:bg-red-600 text-neutral-400 hover:text-white rounded-xl transition-all border border-neutral-800 hover:border-red-600/30 active:scale-95 inline-flex items-center justify-center"
              title="Cancel User Application"
            >
              <MdCancel size={14} />
            </button>
          ) : (
            <span className="text-[10px] font-mono text-neutral-700 italic">No Actions</span>
          )}
        </div>
      </td>

    </tr>
  );
};

export default UserData;