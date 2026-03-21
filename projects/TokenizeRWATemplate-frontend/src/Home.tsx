import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page
 * Virtue Assets — Institutional RWA tokenization landing
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-indigo-50 dark:bg-indigo-950">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-6 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-full tracking-wide">
            Virtue Assets • Trusted RWA Infrastructure (Demo)
          </div>

          <h1 className="text-5xl sm:text-6xl font-semibold text-indigo-700 dark:text-indigo-400 leading-tight tracking-tight">
            Trusted infrastructure for real-world asset tokenization
          </h1>

          <p className="mt-6 text-lg text-indigo-600 dark:text-indigo-400 max-w-2xl mx-auto leading-relaxed">
            Designed for founders, operators, and institutions to structure, issue, and manage real-world assets on-chain with clarity,
            control, and confidence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-medium transition ${
                activeAddress
                  ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 text-white shadow-sm'
                  : 'bg-indigo-300 text-white cursor-not-allowed'
              }`}
            >
              Launch tokenization
            </Link>

            <a
              className="px-8 py-3 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Platform overview
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-sm text-indigo-600 dark:text-indigo-400">Connect your wallet to begin issuing assets.</p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 dark:text-indigo-400">How it works</h2>
          <p className="mt-3 text-indigo-600 dark:text-indigo-400 max-w-2xl">
            A structured workflow for issuing and managing tokenized assets with institutional-grade clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white dark:bg-indigo-900/40 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-semibold">
                1
              </span>
              <h3 className="text-base font-semibold text-indigo-700 dark:text-indigo-400">Connect wallet</h3>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Establish secure authorization to control issuance and management.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white dark:bg-indigo-900/40 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-semibold">
                2
              </span>
              <h3 className="text-base font-semibold text-indigo-700 dark:text-indigo-400">Define asset</h3>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Configure supply, identity, and documentation aligned to the underlying asset.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white dark:bg-indigo-900/40 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-semibold">
                3
              </span>
              <h3 className="text-base font-semibold text-indigo-700 dark:text-indigo-400">Issue asset</h3>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Mint compliant digital assets on Algorand with speed and reliability.
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 p-6 bg-white dark:bg-indigo-900/40 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-semibold">
                4
              </span>
              <h3 className="text-base font-semibold text-indigo-700 dark:text-indigo-400">Manage lifecycle</h3>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Track ownership, enforce controls, and manage asset behavior over time.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">Built for institutional control</h2>
            <ul className="space-y-5 text-sm text-indigo-600 dark:text-indigo-400">
              <li>
                <strong className="text-indigo-700 dark:text-indigo-400">Administrative roles</strong> — Maintain authority over asset
                configuration
              </li>
              <li>
                <strong className="text-indigo-700 dark:text-indigo-400">Transfer controls</strong> — Enable or restrict movement when
                required
              </li>
              <li>
                <strong className="text-indigo-700 dark:text-indigo-400">Recovery mechanisms</strong> — Reassign or recover assets when
                necessary
              </li>
              <li>
                <strong className="text-indigo-700 dark:text-indigo-400">Document linkage</strong> — Connect legal and financial records via
                metadata
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800 rounded-xl p-8">
            <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg border border-indigo-200 dark:border-indigo-700 p-6">
              <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wide">Sample asset structure</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-indigo-600 dark:text-indigo-400">Asset</span>
                  <span className="font-medium text-indigo-700 dark:text-white">Commercial Property</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-600 dark:text-indigo-400">Symbol</span>
                  <span className="font-medium text-indigo-700 dark:text-white">CPROP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-600 dark:text-indigo-400">Supply</span>
                  <span className="font-medium text-indigo-700 dark:text-white">1,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-600 dark:text-indigo-400">Precision</span>
                  <span className="font-medium text-indigo-700 dark:text-white">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-600 dark:text-indigo-400">Controller</span>
                  <span className="font-medium text-indigo-700 dark:text-white">Connected Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-indigo-200 dark:border-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Start your tokenization pilot</h2>
          <p className="text-indigo-600 dark:text-indigo-400 mb-8 max-w-xl mx-auto">
            Validate your asset model and issuance workflow in a controlled, institutional-grade environment.
          </p>
          <Link
            to="/tokenize"
            className={`inline-block px-8 py-3 rounded-lg font-medium transition ${
              activeAddress
                ? 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500 text-white'
                : 'bg-amber-300 text-white cursor-not-allowed'
            }`}
          >
            Begin tokenization
          </Link>
        </div>
      </div>
    </div>
  )
}
