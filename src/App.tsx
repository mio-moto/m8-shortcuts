import { css } from '@linaria/core'
import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fragments } from './app/style/fragments'
import { style } from './app/style/style'
import { Layout } from './Layout'

type UUID = ReturnType<typeof window.crypto.randomUUID>
const appClass = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  > .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: stretch;
    gap: 24px;
    max-height: 100vh;
    max-width: 100vw;

    > .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      > .title {
        position: relative;
        margin: 0;

        > .user-guide {
          cursor: pointer;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          right: -30px;
          height: 30px;
          width: 30px;
          transform: translate(50%, 50%);
          border: 2px solid ${style.themeColors.line.default};
          transition: ${fragments.transition.regular('background-color')};

          &:hover {
            background-color: ${style.themeColors.background.defaultHover};
          }
        }
      }
    }

    > .panels {
      flex: 1;
      display: flex;
      gap: 48px;
      overflow: auto;
      scrollbar-gutter: stable;


      > .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 300px;
        gap: 24px;

        > .image {
          display: block;
          align-self: stretch;
          border: 8px solid black;
          background: black;
          max-height: 70vh;
          aspect-ratio: 1.5;

        }


        > .render {
          flex: 1;
          justify-self: stretch;
          align-self: stretch;
        }

        > .importer {
          align-self: stretch;
          display: flex;
          gap: 24px;
          > .file-selector {
            display: none;
          }
          > .export, .import {
            flex: 1;
          }
        }
    }
  }
}
`

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const
const octaves = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B']

const emptySlots: { file: UUID | undefined; hint: string }[] = []
for (let i = 0; i < notes.length * octaves.length; i += 1) {
  emptySlots.push({ file: undefined, hint: '' })
}

export const App: FC = () => {
  return (
    <div className={appClass}>
      <main className="main">
        <div className="heading">
          <h1 className="title">M8 Shortcuts</h1>
        </div>
        <div className="panels">
          <Routes>
            <Route path=":screen?/:activity?" element={<Layout />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
