import { Template } from '@/lib/templates'
import PortfolioRenderer from '../PortfolioRenderer'
import ReelDesign from './ReelDesign'
import TerracottaDesign from './TerracottaDesign'
import CraftDesign from './CraftDesign'
import VertexDesign from './VertexDesign'
import ClarityDesign from './ClarityDesign'
import EleganceDesign from './EleganceDesign'
import MomentumDesign from './MomentumDesign'
import ConciergeDesign from './ConciergeDesign'
import DevfolioDesign from './DevfolioDesign'
import ZenithDesign from './ZenithDesign'

/**
 * Registry of bespoke, per-site faithful designs. Each recreates the look of
 * its reference portfolio. Slugs not present here fall back to the generic
 * PortfolioRenderer.
 */
const REGISTRY: Record<string, React.ComponentType<{ template: Template }>> = {
  reel: ReelDesign,
  terracotta: TerracottaDesign,
  craft: CraftDesign,
  vertex: VertexDesign,
  clarity: ClarityDesign,
  elegance: EleganceDesign,
  momentum: MomentumDesign,
  concierge: ConciergeDesign,
  devfolio: DevfolioDesign,
  zenith: ZenithDesign,
}

export function hasBespokeDesign(slug: string) {
  return slug in REGISTRY
}

export default function DesignPreview({ template }: { template: Template }) {
  const Design = REGISTRY[template.slug]
  if (Design) return <Design template={template} />
  return <PortfolioRenderer template={template} chrome={false} />
}
