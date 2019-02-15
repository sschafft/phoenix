import Typography from 'typography'
import Kirkham from 'typography-theme-kirkham'

Kirkham.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

Kirkham.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  h3: {
    color: 'hsla(0,0%,0%,.6)',
  },
})

delete Kirkham.googleFonts

const typography = new Typography(Kirkham)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
