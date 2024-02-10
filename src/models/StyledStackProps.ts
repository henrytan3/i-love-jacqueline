export interface StyledStackProps {
  height: string
  backgroundColor: string
  headerSize: string
  headerText: string
  content: {
    boxSize: string[]
    mb: string
    images: string[]
  }
  text: React.ReactNode
}
