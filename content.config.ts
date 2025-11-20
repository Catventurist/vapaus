import { defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const createBaseSchema = () => z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty()
})

const createFeatureItemSchema = () => createBaseSchema().extend({
  icon: property(z.string()).editor({ input: 'icon' })
})

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: property(z.string()).editor({ input: 'icon' }),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const createImageSchema = () => z.object({
  src: property(z.string()).editor({ input: 'media' }),
  alt: z.string().optional(),
  loading: z.enum(['lazy', 'eager']).optional(),
  srcset: z.string().optional()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

export const collections = {
  index_en: defineCollection({
    source: '0.index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object(({
        links: z.array(createLinkSchema())
      })),
      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  docs_en: defineCollection({
    source: '1.docs/**/*',
    type: 'page'
  }),
  pricing_en: defineCollection({
    source: '2.pricing.yml',
    type: 'page',
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.object({
            month: z.string().nonempty(),
            year: z.string().nonempty()
          }),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: createLinkSchema(),
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string())
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty()
          })
        )
      })
    })
  }),
  blog_en: defineCollection({
    source: '3.blog.yml',
    type: 'page'
  }),
  posts_en: defineCollection({
    source: '3.blog/**/*',
    type: 'page',
    schema: z.object({
      image: z.object({ src: property(z.string()).editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: property(z.string()).editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() })
    })
  }),
  changelog_en: defineCollection({
    source: '4.changelog.yml',
    type: 'page'
  }),
  versions_en: defineCollection({
    source: '4.changelog/**/*',
    type: 'page',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string(),
      date: z.date(),
      image: z.string()
    })
  }),
  projects_en: defineCollection({
    type: 'page',
    source: '5.projects/*.yml',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: property(z.string()).editor({ input: 'media' }),
      url: z.string(),
      tags: z.array(z.string()),
      date: z.date()
    })
  }),
  pro_en: defineCollection({
    source: '5.projects.yml',
    type: 'page',
    schema: z.object({
      links: z.array(createButtonSchema())
    })
  }),
  faq_en: defineCollection({
    type: 'page',
    source: '6.faq.yml',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      categories: z.array(
        z.object({
          title: z.string().nonempty(),
          questions: z.array(
            z.object({
              label: z.string().nonempty(),
              content: z.string().nonempty()
            })
          )
        }))
    })
  }),
  index_fi: defineCollection({
    source: 'fi/0.index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object(({
        links: z.array(createLinkSchema())
      })),
      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  docs_fi: defineCollection({
    source: 'fi/1.docs/**/*',
    type: 'page'
  }),
  pricing_fi: defineCollection({
    source: 'fi/2.pricing.yml',
    type: 'page',
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.object({
            month: z.string().nonempty(),
            year: z.string().nonempty()
          }),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: createLinkSchema(),
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string())
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty()
          })
        )
      })
    })
  }),
  blog_fi: defineCollection({
    source: 'fi/3.blog.yml',
    type: 'page'
  }),
  posts_fi: defineCollection({
    source: 'fi/3.blog/**/*',
    type: 'page',
    schema: z.object({
      image: z.object({ src: property(z.string()).editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: property(z.string()).editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() })
    })
  }),
  changelog_fi: defineCollection({
    source: 'fi/4.changelog.yml',
    type: 'page'
  }),
  versions_fi: defineCollection({
    source: 'fi/4.changelog/**/*',
    type: 'page',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string(),
      date: z.date(),
      image: z.string()
    })
  }),
  projects_fi: defineCollection({
    type: 'page',
    source: 'fi/5.projects/*.yml',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: property(z.string()).editor({ input: 'media' }),
      url: z.string(),
      tags: z.array(z.string()),
      date: z.date()
    })
  }),
  pro_fi: defineCollection({
    source: 'fi/5.projects.yml',
    type: 'page',
    schema: z.object({
      links: z.array(createButtonSchema())
    })
  }),
  faq_fi: defineCollection({
    type: 'page',
    source: 'fi/6.faq.yml',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      categories: z.array(
        z.object({
          title: z.string().nonempty(),
          questions: z.array(
            z.object({
              label: z.string().nonempty(),
              content: z.string().nonempty()
            })
          )
        }))
    })
  })
}
