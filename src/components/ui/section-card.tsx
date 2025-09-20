import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface SectionCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  headerAction?: React.ReactNode
  collapsible?: boolean
  defaultExpanded?: boolean
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  children,
  className,
  headerAction,
  collapsible = false,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

  const handleToggle = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader
        className={cn(collapsible && 'cursor-pointer transition-colors hover:bg-muted/50')}
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {title}
              {collapsible && (
                <div
                  className={cn(
                    'transform text-muted-foreground transition-transform',
                    isExpanded ? 'rotate-180' : ''
                  )}
                >
                  ▼
                </div>
              )}
            </CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {headerAction && <div onClick={(e) => e.stopPropagation()}>{headerAction}</div>}
        </div>
      </CardHeader>

      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  )
}
