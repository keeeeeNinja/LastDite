# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Obsidian-based knowledge management system for a diet book project called "ラストダイエット" (Last Diet). The project uses a structured note-taking approach with specific tagging and linking conventions to organize research, memos, outlines, and draft content for a comprehensive diet guide.

## Directory Structure

- `10-outline/` - Book chapter outlines and structural content (e.g., h2h3.md contains the main book structure)
- `20-memos/` - Individual research notes and insights on diet topics
- `25-sessions/` - Interview session records and facilitated content development
- `30-research/` - Primary research documents and foundational materials
- `40-drafts/` - Draft versions of content
- `50-glossary/` - Terminology and definitions
- `60-assets/` - Templates, prompts, and workflow assets including tagging rules
- `scripts/` - JavaScript utilities for Obsidian automation
- `templates/` - Note templates for consistent formatting
- `Template/` - Additional Obsidian templates

## Key Workflows

### Content Development Process
1. Research materials go in `30-research/`
2. Individual insights captured in `20-memos/`
3. Structured interviews conducted and saved in `25-sessions/`
4. Content organized using the outline in `10-outline/h2h3.md`
5. Drafts developed in `40-drafts/`

### Note Management
- All notes follow YAML frontmatter with structured metadata
- Tagging system defined in `60-assets/タグづけルール.md（書籍ダイエット版）.md`
- Automatic title updating via `scripts/updateTitle.js`
- Template-based note creation using Templater plugin

## Tagging and Linking System

### Required Tags (max 5 per note)
- `type/` - Note type (memo, research, outline, draft, snippet, checklist)
- `topic/` - Subject matter (1-3 tags: nutrition, exercise, habits, etc.)
- `status/` - Workflow stage (inbox, draft, in-progress, ready, review, published, archived)
- `evidence/` - Evidence level (optional: meta-analysis, rct, cohort, etc.)
- `priority/` - Priority level (optional: high, med, low)

### Linking Conventions
- Chapter links: `[[ch02-○○]]` format
- Term links: `[[用語/○○]]` for definitions
- Related links: Added as "See also:" at note end

## Automation Tools

### Obsidian Scripts
- `scripts/updateTitle.js` - Interactive title updating with filename sanitization
- Template system using Templater plugin for consistent note structure

### Content Processing
- AI-assisted tagging and linking using prompts in `60-assets/`
- Structured interview facilitation using `60-assets/モデル用ファシリテータープロンプト.md`

## Important Files

- `10-outline/h2h3.md` - Main book structure with chapters and sections
- `60-assets/タグづけルール.md（書籍ダイエット版）.md` - Complete tagging specification
- `60-assets/モデル用ファシリテータープロンプト.md` - Interview facilitation guidelines
- `30-research/ラストダイエットの元.md` - Core research foundation
- `30-research/（実体験記）人体実験白書2024〜私の場合〜.md` - Personal experience data

## Development Notes

- This is not a software project but a content creation workflow
- No build scripts, testing frameworks, or deployment processes
- Primary tools: Obsidian, Templater plugin, custom JavaScript utilities
- Focus on content organization, research synthesis, and structured writing
- Japanese language content with English organizational elements