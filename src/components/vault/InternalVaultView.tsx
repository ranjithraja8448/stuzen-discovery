import React, { useState } from 'react';
import { DiscoveryFormData } from '../../types/discovery';
import { 
  Database, 
  Search, 
  Eye, 
  Edit3, 
  Trash2, 
  Printer, 
  Download, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Building2, 
  Cpu, 
  IndianRupee, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle,
  FileSpreadsheet
} from 'lucide-react';
import { analyzeScope } from '../../utils/scopeAnalyzer';

interface InternalVaultViewProps {
  vaultRecords: DiscoveryFormData[];
  onLoadRecord: (record: DiscoveryFormData) => void;
  onDeleteRecord: (id: string) => void;
  onOpenPrintPreviewForRecord: (record: DiscoveryFormData) => void;
  onStartNewDiscovery: () => void;
}

export const InternalVaultView: React.FC<InternalVaultViewProps> = ({
  vaultRecords,
  onLoadRecord,
  onDeleteRecord,
  onOpenPrintPreviewForRecord,
  onStartNewDiscovery,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const filteredRecords = vaultRecords.filter(rec => {
    const matchesSearch =
      rec.s01_client.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.s01_client.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.s01_client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || rec.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportRecordJson = (record: DiscoveryFormData) => {
    const blob = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `STUZEN_Discovery_${record.s01_client.businessName.replace(/[^a-z0-9]/gi, '_')}_${record.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export entire Lead Vault to formatted CSV Excel spreadsheet (Suggestion 2)
  const exportVaultToCsv = () => {
    if (!vaultRecords.length) return;

    const headers = [
      'Record ID',
      'Interview Date',
      'Client Business Name',
      'Contact Person',
      'Designation',
      'Phone / WhatsApp',
      'Email',
      'Website URL',
      'Industry',
      'Audit Status',
      'Website Archetype',
      'Sitemap Pages Count',
      'Sitemap Pages List',
      'Selected Features Count',
      'Est. Investment Min (INR)',
      'Est. Investment Max (INR)',
      'Est. Velocity Timeline',
      'Engineering Complexity Tier',
      'Commercial Purposes',
      'Target Audience',
      'Business Problem To Solve',
      'Meeting Mode',
      'Stuzen Solutions Rep',
      'Client Sign-off Status',
      'Created At'
    ];

    const escapeCsv = (val: any) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).trim();
      return `"${str.replace(/"/g, '""')}"`;
    };

    const rows = vaultRecords.map(rec => {
      const scope = analyzeScope(rec);
      return [
        rec.id,
        rec.meeting.interviewDate || '',
        rec.s01_client.businessName || 'Untitled Prospect',
        rec.s01_client.contactName || '',
        rec.s01_client.contactDesignation || '',
        rec.s01_client.phoneWhatsapp || '',
        rec.s01_client.email || '',
        rec.s01_client.websiteUrl || '',
        rec.s01_client.industry || '',
        rec.status,
        rec.s03_structure.websiteType || '',
        scope.pageCount,
        (rec.s03_structure.requiredPages || []).join('; '),
        scope.featureCount,
        `₹${scope.estimatedMinINR.toLocaleString('en-IN')}`,
        `₹${scope.estimatedMaxINR.toLocaleString('en-IN')}`,
        scope.estimatedWeeks,
        scope.complexityTier,
        (rec.s02_goals.purposes || []).join('; '),
        rec.s02_goals.targetAudience || '',
        rec.s02_goals.businessProblemToSolve || '',
        rec.meeting.meetingMode || '',
        rec.meeting.stuzenRepresentative || '',
        rec.s10_final.signOff.isAgreed ? 'Agreed & Signed' : 'Pending Sign-off',
        rec.createdAt || ''
      ].map(escapeCsv).join(',');
    });

    const csvContent = '\uFEFF' + [headers.map(escapeCsv).join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `STUZEN_Lead_Vault_Spreadsheet_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDelete = (id: string) => {
    onDeleteRecord(id);
    setConfirmDeleteId(null);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-slate-100 p-4 sm:p-6 lg:p-8 transition-colors">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-500/20">
                CONFIDENTIAL REPOSITORY
              </span>
              <span className="font-mono text-xs text-slate-500">• SECURE LOCALSTORAGE</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Internal Discovery Lead Vault
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Browse, inspect, export spreadsheets, print, and reload past architectural discovery sessions.
            </p>
          </div>

          {/* Action Buttons: Export CSV + New Discovery */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={exportVaultToCsv}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#12141a] px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer shadow-xs"
              title="Export all vault leads as an Excel-compatible CSV spreadsheet"
            >
              <FileSpreadsheet size={15} className="text-emerald-500" />
              <span>📥 Export All to CSV</span>
            </button>

            <button
              type="button"
              onClick={onStartNewDiscovery}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles size={15} />
              <span>+ New Session</span>
            </button>
          </div>
        </div>

        {/* Vault Pipeline Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-5 shadow-sm">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">Total Saved Dossiers</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold text-slate-900 dark:text-white">
                {vaultRecords.length}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Active in Vault</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-5 shadow-sm">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">Average Audit Depth</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold text-blue-600 dark:text-cyan-400">
                {Math.round(
                  vaultRecords.reduce((acc, r) => acc + analyzeScope(r).overallPercentage, 0) /
                    (vaultRecords.length || 1)
                )}%
              </span>
              <span className="text-xs text-slate-500">Across 45 Questions</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-5 shadow-sm">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">Enterprise Status</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold text-blue-600 dark:text-blue-400">
                {vaultRecords.filter(r => r.status === 'Approved' || r.status === 'Completed').length}
              </span>
              <span className="text-xs text-slate-500">Approved / Sprint Ready</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by client, industry, or record ID..."
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-slate-200/60 dark:bg-white/5 p-1 border border-slate-200 dark:border-white/10 overflow-x-auto scrollbar-none">
            {['All', 'Approved', 'In Review', 'Completed', 'Draft'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-md text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-blue-600 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecords.map(record => {
            const scope = analyzeScope(record);

            return (
              <div
                key={record.id}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                          {record.id}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span className="font-mono text-[11px] text-slate-400">
                          {record.meeting.interviewDate}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                        {record.s01_client.businessName || 'Untitled Client'}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {record.s01_client.industry || 'General Industry'} • {record.s01_client.contactName} ({record.s01_client.contactDesignation})
                      </p>
                    </div>

                    <span
                      className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                        record.status === 'Approved'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                          : record.status === 'In Review'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
                      }`}
                    >
                      {record.status}
                    </span>
                  </div>

                  {/* Summary Snippet */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {record.s10_final.mostImportantSuccessFactor || record.s02_goals.businessProblemToSolve || 'Comprehensive discovery record.'}
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/60 dark:bg-white/5">
                      <span className="text-[10px] text-slate-400 block">Sitemap</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                        {scope.pageCount} Pages
                      </span>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/60 dark:bg-white/5">
                      <span className="text-[10px] text-slate-400 block">Matrix</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                        {scope.featureCount} Feats
                      </span>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/60 dark:bg-white/5">
                      <span className="text-[10px] text-slate-400 block">Velocity</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200 truncate block">
                        {scope.estimatedWeeks}
                      </span>
                    </div>
                  </div>

                  {/* Investment Tier Badge */}
                  <div className="mt-3 flex items-center justify-between p-2.5 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-500/20">
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <IndianRupee size={12} className="text-blue-600 dark:text-cyan-400" />
                      <span>Estimate:</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                      {scope.estimatedPriceRange}
                    </span>
                  </div>
                </div>

                {/* Card Actions Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => onOpenPrintPreviewForRecord(record)}
                      className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      title="Print Official Dossier"
                    >
                      <Printer size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => exportRecordJson(record)}
                      className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      title="Download JSON"
                    >
                      <Download size={15} />
                    </button>

                    {confirmDeleteId === record.id ? (
                      <div className="flex items-center gap-1 bg-red-50 dark:bg-red-950/40 px-2 py-1 rounded-lg border border-red-500/20">
                        <span className="text-[10px] text-red-600 dark:text-red-400 font-medium">Delete?</span>
                        <button
                          type="button"
                          onClick={() => handleDelete(record.id)}
                          className="px-1.5 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold cursor-pointer"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(null)}
                          className="px-1 py-0.5 text-slate-400 text-[10px] cursor-pointer"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(record.id)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onLoadRecord(record)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-500 active:scale-95 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Load in Portal</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 p-8">
            <Database size={32} className="mx-auto text-slate-400" />
            <h4 className="mt-3 text-base font-semibold text-slate-700 dark:text-slate-300">
              No matching client discovery records found
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search criteria or create a new discovery session.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
