/* Copyright 2021, Milkdown by Mirone. */
import { MilkdownProvider } from '@milkdown/react'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react'
import React from 'react'
import { HomeEditor } from './Editor'

export const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-24 text-center">
        <h1 className="text-4xl font-medium sm:text-6xl xl:text-8xl">The <span className="text-nord10">WYSIWYG Markdown</span> Editor Framework</h1>
        <p className="mt-6 text-lg sm:text-2xl">A plugin driven framework to build <span className="text-nord10">WYSIWYG markdown</span> editor.</p>
        <div className="mt-9 flex justify-center gap-4">
          <button className="bg-nord10 hover:bg-nord9 inline-flex h-14 items-center rounded-2xl py-4 px-5 text-gray-50 shadow-md hover:shadow-lg">
            <span className="material-symbols-outlined mr-3 text-base">play_circle</span>
            <span className="text-sm">GET STARTED</span>
          </button>
          <button className="hover-shadow-lg dark:bg-nord3 inline-flex h-14 items-center rounded-2xl bg-gray-200 py-4 px-5 shadow-md hover:bg-gray-100">
            <span className="text-sm">VIEW ON GITHUB</span>
          </button>
        </div>
      </div>
      <div className="mt-24">
        <MilkdownProvider>
          <ProsemirrorAdapterProvider>
            <HomeEditor />
          </ProsemirrorAdapterProvider>
        </MilkdownProvider>
      </div>
      <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="dark:bg-nord3 flex-1/2 rounded-2xl bg-gray-50 py-3 px-4">
          <div className="text-xl font-bold">Header</div>
          <p className="mt-7 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="dark:bg-nord3 flex-1/2 rounded-2xl bg-gray-50 py-3 px-4">
          <div className="text-xl font-bold">Header</div>
          <p className="mt-7 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="dark:bg-nord3 flex-1/2 rounded-2xl bg-gray-50 py-3 px-4">
          <div className="text-xl font-bold">Header</div>
          <p className="mt-7 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="dark:bg-nord3 flex-1/2 rounded-2xl bg-gray-50 py-3 px-4">
          <div className="text-xl font-bold">Header</div>
          <p className="mt-7 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  )
}
