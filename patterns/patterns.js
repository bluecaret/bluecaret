export default [
  {
    name: 'Caret',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <polygon points="50,25 80,55 70,65 50,45 30,65 20,55" fill="%f%" />
      </svg>
    `,
  },
  {
    name: 'Checkers',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <rect width="50" height="50" fill="%f%"/>
        <rect width="50" height="50" x="50" y="50" fill="%f%"/>
      </svg>
    `,
  },
  {
    name: 'Spots',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <circle r="12" cx="30" cy="20" fill="%f%"/>
        <circle r="7" cx="70" cy="30" fill="%f%"/>
        <circle r="10" cx="20" cy="60" fill="%f%"/>
        <circle r="15" cx="80" cy="80" fill="%f%"/>
        </svg>
        `,
  },
  {
    name: 'Squares Make Circles',
    svg: /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <rect width="50" height="50" fill="%f%"/>
        <rect width="50" height="50" x="50" y="50" fill="%f%"/>
        <circle r="15" cx="25" cy="25" fill="%b%"/>
        <circle r="15" cx="75" cy="25" fill="%f%"/>
        <circle r="15" cx="75" cy="75" fill="%b%"/>
        <circle r="15" cx="25" cy="75" fill="%f%"/>
      </svg>
    `,
  },
  {
    name: 'Bubbles',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <circle r="12" cx="30" cy="20" fill="none" stroke="%f%" stroke-width="2"/>
        <circle r="7" cx="70" cy="30" fill="none" stroke="%f%" stroke-width="2"/>
        <circle r="10" cx="20" cy="60" fill="none" stroke="%f%" stroke-width="2"/>
        <circle r="15" cx="80" cy="80" fill="none" stroke="%f%" stroke-width="2"/>
      </svg>
    `,
  },
  {
    name: 'Positive',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <rect width="40" height="6" x="30" y="47" fill="%f%"/>
        <rect width="6" height="40" x="47" y="30" fill="%f%"/>
      </svg>
    `,
  },
  {
    name: 'Negative',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <rect width="40" height="6" x="30" y="47" fill="%f%"/>
      </svg>
    `,
  },
  {
    name: 'Negative 90',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <rect width="6" height="40" x="47" y="30" fill="%f%"/>
      </svg>
    `,
  },
  {
    name: 'North Star',
    svg: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="%b%"/>
        <polygon points="40,40 50,20 60,40 80,50 60,60 50,80 40,60 20,50" fill="none" stroke="%f%" stroke-width="2" />
      </svg>
    `,
  },
]
