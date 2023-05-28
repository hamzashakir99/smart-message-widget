# smart-message-widget

[NPM version][npm-url]
[Build][github-build-url]
![npm-typescript][npm-typescript]
[License][github-license-url]

comming soon.

[**Live Demo**](https://gapon2401.github.io/my-react-typescript-package/)

## Installation:

```bash
npm install smart-message-widget --save-dev
```

or

```bash
yarn add -D smart-message-widget
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SmartMessage } from 'smart-message-widget'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
         <SmartMessage domain={''} token={''} showError={false} welcomeMessage={'Welcome to our website bot'} />
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/smart-message-widget
[npm-image]: https://img.shields.io/npm/v/smart-message-widget
[github-license]: https://img.shields.io/github/license/gapon2401/smart-message-widget
[github-license-url]: https://github.com/gapon2401/smart-message-widget/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/smart-message-widget/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/smart-message-widget/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/smart-message-widget
