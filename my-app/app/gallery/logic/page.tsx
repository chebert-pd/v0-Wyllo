export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16 space-y-16">
      <div className="space-y-4">
        <h1 className="h1">Design System Logic</h1>
        <p className="p text-muted-foreground max-w-3xl">
          This page documents the architectural decisions behind the system —
          how tokens are structured, how surfaces alternate, how elevation works,
          and how semantic intent is mapped to primitives. This is the “why”
          behind the UI.
        </p>
      </div>

      {/* ============================= */}
      {/* COLOR ARCHITECTURE */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Color Architecture</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Primitive First</h3>
          <p className="p text-muted-foreground">
            All color decisions begin at the primitive level. We defined:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Gray scale (lightness-based, shared violet hue)</li>
            <li>Violet scale (brand-driven, OKLCH based)</li>
            <li>Tailwind families for semantic states (emerald, amber, cyan, rose)</li>
          </ul>
          <p className="p text-muted-foreground">
            Primitives are named by lightness (e.g., <code>--gray-96</code>,{" "}
            <code>--violet-64</code>) to keep them perceptually predictable.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Semantic Layer</h3>
          <p className="p text-muted-foreground">
            Semantic tokens map intent to primitives:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>background, card, popover</li>
            <li>primary, secondary, accent</li>
            <li>success, warning, info, destructive</li>
            <li>border, input, ring</li>
          </ul>
          <p className="p text-muted-foreground">
            Components never reference primitives directly. They use semantic
            tokens so we can shift the underlying system without rewriting
            components.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. OKLCH as the Source of Truth</h3>
          <p className="p text-muted-foreground">
            We use OKLCH instead of HSL or HEX internally because:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Perceptual lightness consistency</li>
            <li>Predictable contrast shifts</li>
            <li>Better dark mode parity</li>
          </ul>
        </div>
      </section>

      {/* ============================= */}
      {/* SURFACE SYSTEM */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Surface System</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Tone Alternation by Level</h3>
          <p className="p text-muted-foreground">
            Cards compute their tone based on a numeric <code>level</code> prop.
            Tone alternates mathematically:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Even levels → secondary surface (canvas tone)</li>
            <li>Odd levels → primary surface (white in light mode)</li>
          </ul>
          <p className="p text-muted-foreground">
            This keeps nested surfaces visually distinct without manually
            assigning variants.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Border Logic</h3>
          <p className="p text-muted-foreground">
            Borders are contextual:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Level 1 → primary border</li>
            <li>Nested surfaces → subtle border</li>
            <li>Canvas (level 0) → no border</li>
          </ul>
          <p className="p text-muted-foreground">
            This reinforces hierarchy without relying on heavy elevation.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. Elevation Rules</h3>
          <p className="p text-muted-foreground">
            Elevation is semantic and restrained:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Level 1 surfaces are elevated</li>
            <li>Level 2+ are completely flat</li>
            <li>Elevation uses violet‑tinted ambient shadows</li>
          </ul>
          <p className="p text-muted-foreground">
            Shadows are tokenized by Y-axis offset (e.g.,{" "}
            <code>--shadow-y2</code>) and mapped to semantic elevation roles.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* TYPOGRAPHY SYSTEM */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Typography System</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Utility-Driven Scale</h3>
          <p className="p text-muted-foreground">
            We use Tailwind sizing but semantic utility classes:
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>Headings → <code>.h1 – .h4</code></li>
            <li>Body → <code>.p-lg, .p, .p-sm</code></li>
            <li>Label → <code>.label-lg, .label-md, .label-sm</code></li>
            <li>Data → <code>.data-lg, .data-md, .data-sm</code></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Weight as Hierarchy</h3>
          <p className="p text-muted-foreground">
            Headings use 650 weight. Body uses 425. Labels use 525. Data uses
            650 with tabular numbers. Hierarchy is created by weight and rhythm,
            not just size.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. 4px Vertical Rhythm</h3>
          <p className="p text-muted-foreground">
            Line heights and spacing are aligned to a 4px system. This ensures
            tighter SaaS-style density instead of blog-style looseness.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">4. Forms Typography Rules</h3>
          <p className="p text-muted-foreground">
            Form labels default to <code>label-sm</code> with muted foreground
            to reduce visual noise, while entered values use a stronger weight
            so user input reads as the primary information.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* COMPONENT PRINCIPLES */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Component Principles</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Variant over Duplication</h3>
          <p className="p text-muted-foreground">
            Visual differences (tone, border, elevation, size) are implemented
            as variants — not new components.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Semantic Tokens in Components</h3>
          <p className="p text-muted-foreground">
            Buttons, Cards, Alerts, and Inputs reference semantic tokens
            exclusively. No component references raw primitive values.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. System Trust</h3>
          <p className="p text-muted-foreground">
            Demo pages and examples do not override tokens. They rely entirely
            on system logic so we can validate architecture under real nesting
            conditions.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* DARK MODE STRATEGY */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Dark Mode Strategy</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Independent Semantic Mapping</h3>
          <p className="p text-muted-foreground">
            Core polarity tokens (<code>background</code> and{" "}
            <code>foreground</code>) invert between themes. All other semantic
            tokens (primary, accent, border, input, destructive, etc.) are
            intentionally remapped to different primitives per theme to
            preserve contrast, hierarchy, and interaction clarity rather than
            relying on mathematical lightness inversion.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Structural vs Subtle Borders</h3>
          <p className="p text-muted-foreground">
            We distinguish between structural borders (<code>--border</code>) and
            subtle separators (<code>--border-subtle</code>). Subtle borders are
            always perceptually lighter than structural borders in both themes.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. Tokenized Destructive Solid</h3>
          <p className="p text-muted-foreground">
            Destructive buttons use a dedicated solid token
            (<code>--destructive-solid</code>) instead of reusing the background
            semantic. This ensures accessibility and visual priority without
            compromising contextual alert styling.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">4. Subtle Primary Borders</h3>
          <p className="p text-muted-foreground">
            When primary emphasis needs to feel premium (e.g., default badges),
            we use a dedicated soft border token
            (<code>--border-primary-subtle</code>) built with color-mix logic
            similar to the halo approach. This avoids overbearing borders while
            staying within the semantic system.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* INTERACTION ARCHITECTURE */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Interaction Architecture</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Selection Owns Its Own Visual State</h3>
          <p className="p text-muted-foreground">
            Layout components (e.g., Field) own spacing and structure only.
            Interactive components (ChoiceCard, Switch, Tabs) own selection,
            halo, border, and hover states. This separation prevents cascading
            side effects.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Tokenized Halo System</h3>
          <p className="p text-muted-foreground">
            Selection halos use the <code>--accent-halo</code> token rather than
            ad-hoc ring utilities. This ensures consistent focus and selection
            feedback across cards, radios, and toggles.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. Skeuomorphic Toggle Logic</h3>
          <p className="p text-muted-foreground">
            The Switch thumb uses tokenized gradients and layered shadows to
            create a subtle raised effect. On-state styling shifts from neutral
            gray undertones to violet undertones while preserving the same
            structural logic.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* COMPOSITION PATTERNS */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Composition Patterns</h2>

        <div className="space-y-4">
          <h3 className="h3">1. GlassFrame Wrapper</h3>
          <p className="p text-muted-foreground">
            Frosted overlays (dialogs, sheets, drawers) use a reusable
            <code>&lt;GlassFrame /&gt;</code> wrapper. Blur, border, and ambient
            treatment are centralized so overlays remain visually consistent.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. DataTable as a Shell Pattern</h3>
          <p className="p text-muted-foreground">
            The DataTable component separates structural table rendering from
            optional controls (search, filters, column visibility, actions).
            Feature affordances are composable rather than baked in.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. Timeline as Validation Logic</h3>
          <p className="p text-muted-foreground">
            Step timelines are not decorative. Status (upcoming, current,
            complete) is derived from validation state. Completion converts
            numeric markers to check icons automatically.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">4. Inline Field Controls</h3>
          <p className="p text-muted-foreground">
            Tables and dense workflows use dedicated inline variants for Input
            and Select. Inline controls are borderless by default, use
            <code>text-sm</code> with 525 weight, inherit primary text color,
            and expose affordance via an animated underline (input-colored)
            that thickens on focus.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">5. Semantic Badges + Composed Badge Patterns</h3>
          <p className="p text-muted-foreground">
            Badges support semantic intent variants and reusable composed
            patterns (status, indicator, avatar, icon, delta, action). Composed
            patterns are style-agnostic and can be paired with any semantic
            badge variant.
          </p>
          <ul className="p text-muted-foreground list-disc pl-6 space-y-2">
            <li>
              Default badge uses a softer semantic border token
              (<code>--border-primary-subtle</code>) for premium, consistent
              emphasis.
            </li>
            <li>
              Outline badges always render on the primary surface background
              (white in light mode) and use subtle borders.
            </li>
            <li>
              Indicator pulse is constrained to the outline badge style, while
              the pulsing dot remains a solid semantic color.
            </li>
            <li>
              Action badges are constrained to the outline style for clarity
              and consistency.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="h3">6. Metric Panel Pattern</h3>
          <p className="p text-muted-foreground">
            A composed Metric Panel pattern uses a row of stat-like triggers
            with a single expandable detail region (chart/table) below. Behavior
            is intentionally “closed by default” and supports click-to-open,
            click-again-to-close.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* RESPONSIVE PHILOSOPHY */}
      {/* ============================= */}
      <section className="space-y-6">
        <h2 className="h2">Responsive Philosophy</h2>

        <div className="space-y-4">
          <h3 className="h3">1. Structural Reflow over Cosmetic Shift</h3>
          <p className="p text-muted-foreground">
            Components change structure at breakpoints (sidebar collapsing,
            timeline scaling, radio cards stacking) rather than simply resizing.
            Layout adapts to cognition, not just viewport width.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">2. Density Scales Intentionally</h3>
          <p className="p text-muted-foreground">
            Controls and navigation elements offer size variants (e.g., Tabs,
            Buttons) to support dense dashboards and spacious workflows using
            the same token system.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="h3">3. App Navigation Collapse</h3>
          <p className="p text-muted-foreground">
            The left navigation collapses into a hamburger menu at
            <code>lg+</code> breakpoints to preserve workspace density while
            keeping the system’s primary navigation reachable on smaller
            screens.
          </p>
        </div>
      </section>

      <div className="pt-8 border-t border-border">
        <p className="p text-muted-foreground">
          This system prioritizes predictability, semantic clarity, and
          architectural flexibility. Every decision supports long-term
          maintainability and AI-assisted consistency.
        </p>
      </div>
    </div>
  )
}