"use client";

import { alignPlugin } from "@/plate/alignPlugin";
import { autoformatIndentLists } from "@/plate/autoformatIndentLists";
import { autoformatLists } from "@/plate/autoformatLists";
import { autoformatRules } from "@/plate/autoformatRules";
import { CommentsProvider } from "@/plate/CommentsProvider";
import { createPlateUI } from "@/plate/create-plate-ui";
// import { usePlaygroundValue } from "@/plate/demo/values/usePlaygroundValue";
import { dragOverCursorPlugin } from "@/plate/dragOverCursorPlugin";
import { editableProps } from "@/plate/editableProps";
import { emojiPlugin } from "@/plate/emojiPlugin";
import { exitBreakPlugin } from "@/plate/exitBreakPlugin";
import { forcedLayoutPlugin } from "@/plate/forcedLayoutPlugin";
import { indentPlugin } from "@/plate/indentPlugin";
import { lineHeightPlugin } from "@/plate/lineHeightPlugin";
import { linkPlugin } from "@/plate/linkPlugin";
import { resetBlockTypePlugin } from "@/plate/resetBlockTypePlugin";
import { selectOnBackspacePlugin } from "@/plate/selectOnBackspacePlugin";
import { softBreakPlugin } from "@/plate/softBreakPlugin";
import { tabbablePlugin } from "@/plate/tabbablePlugin";
import { trailingBlockPlugin } from "@/plate/trailingBlockPlugin";
import { cn } from "@udecode/cn";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSingleLinePlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createCaptionPlugin } from "@udecode/plate-caption";
import { createCodeBlockPlugin } from "@udecode/plate-code-block";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { createCommentsPlugin } from "@udecode/plate-comments";
import { createPlugins, Plate, PlatePluginComponent, Value } from "@udecode/plate-common";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import { createExcalidrawPlugin } from "@udecode/plate-excalidraw";
import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontSizePlugin } from "@udecode/plate-font";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createHighlightPlugin } from "@udecode/plate-highlight";
import { createHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { createJuicePlugin } from "@udecode/plate-juice";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createLinkPlugin } from "@udecode/plate-link";
import { createListPlugin, createTodoListPlugin } from "@udecode/plate-list";
import { createImagePlugin, createMediaEmbedPlugin } from "@udecode/plate-media";
import { createMentionPlugin } from "@udecode/plate-mention";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createDeletePlugin, createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import { createTablePlugin } from "@udecode/plate-table";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { MentionCombobox } from "@/components/plate-ui/mention-combobox";
import { captionPlugin } from "@/plate/captionPlugin";
import { PlaygroundFixedToolbarButtons } from "@/plate/playground-fixed-toolbar-buttons";
import { PlaygroundFloatingToolbarButtons } from "@/plate/playground-floating-toolbar-buttons";

let components = createPlateUI(
  {},
  {
    placeholder: true,
    draggable: true,
  },
);
const autoformatOptions = {
  rules: [...autoformatRules],
  enableUndoOnDelete: true,
};

autoformatOptions.rules.push(...autoformatIndentLists);
autoformatOptions.rules.push(...autoformatLists);

let plugins = createPlugins(
  [
    createParagraphPlugin({ enabled: true }),
    createHeadingPlugin({ enabled: true }),
    createBlockquotePlugin({ enabled: true }),
    createCodeBlockPlugin({ enabled: true }),
    createHorizontalRulePlugin({ enabled: true }),
    createLinkPlugin({ ...linkPlugin, enabled: true }),
    createListPlugin({
      enabled: true,
    }),
    createImagePlugin({ enabled: true }),
    createMediaEmbedPlugin({ enabled: true }),
    createCaptionPlugin({ ...captionPlugin, enabled: true }),
    createMentionPlugin({
      enabled: true,
      options: {
        triggerPreviousCharPattern: /^$|^[\s"']$/,
      },
    }),
    createTablePlugin({
      enabled: true,
      options: {
        enableMerging: true,
      },
    }),
    createTodoListPlugin({ enabled: true }),
    createExcalidrawPlugin({ enabled: true }),

    // Marks
    createBoldPlugin({ enabled: true }),
    createItalicPlugin({ enabled: true }),
    createUnderlinePlugin({ enabled: true }),
    createStrikethroughPlugin({ enabled: true }),
    createCodePlugin({ enabled: true }),
    createSubscriptPlugin({ enabled: true }),
    createSuperscriptPlugin({ enabled: true }),
    createFontColorPlugin({ enabled: true }),
    createFontBackgroundColorPlugin({
      enabled: true,
    }),
    createFontSizePlugin({ enabled: true }),
    createHighlightPlugin({ enabled: true }),
    createKbdPlugin({ enabled: true }),

    // Block Style
    createAlignPlugin({ ...alignPlugin, enabled: true }),
    createIndentPlugin({ ...indentPlugin, enabled: true }),
    createIndentListPlugin({
      ...indentPlugin,
      enabled: true,
    }),
    createLineHeightPlugin({
      ...lineHeightPlugin,
      enabled: true,
    }),

    // Functionality
    createAutoformatPlugin({
      enabled: true,
      options: autoformatOptions,
    }),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
      enabled: true,
    }),
    createComboboxPlugin({ enabled: true }),
    createDndPlugin({
      options: { enableScroller: true },
      enabled: true,
    }),
    createEmojiPlugin({ ...emojiPlugin, enabled: true }),
    createExitBreakPlugin({
      ...exitBreakPlugin,
      enabled: true,
    }),
    createNodeIdPlugin({ enabled: true }),
    createNormalizeTypesPlugin({
      ...forcedLayoutPlugin,
      enabled: true,
    }),
    createResetNodePlugin({
      ...resetBlockTypePlugin,
      enabled: true,
    }),
    createSelectOnBackspacePlugin({
      ...selectOnBackspacePlugin,
      enabled: true,
    }),
    createDeletePlugin({
      enabled: true,
    }),
    createSingleLinePlugin({
      enabled: true,
    }),
    createSoftBreakPlugin({
      ...softBreakPlugin,
      enabled: true,
    }),
    createTabbablePlugin({
      ...tabbablePlugin,
      enabled: true,
    }),
    createTrailingBlockPlugin({
      ...trailingBlockPlugin,
      enabled: true,
    }),
    { ...dragOverCursorPlugin, enabled: true },

    // Collaboration
    createCommentsPlugin({ enabled: true }),

    // Deserialization
    createDeserializeDocxPlugin({ enabled: true }),
    createDeserializeMdPlugin({ enabled: true }),
    createJuicePlugin({ enabled: true }),
  ],
  {
    components,
  },
);

// // reset editor when initialValue changes
// export const useInitialValueVersion = (initialValue: Value) => {
//   const enabled = settingsStore.use.checkedPlugins();
//   const [version, setVersion] = useState(1);
//   const prevEnabled = useRef(enabled);
//   const prevInitialValueRef = useRef(initialValue);

//   useEffect(() => {
//     if (enabled === prevEnabled.current) return;
//     prevEnabled.current = enabled;
//     setVersion((v) => v + 1);
//   }, [enabled]);

//   useEffect(() => {
//     if (initialValue === prevInitialValueRef.current) return;
//     prevInitialValueRef.current = initialValue;
//     setVersion((v) => v + 1);
//   }, [initialValue]);

//   return version;
// };

export default function PlaygroundDemo() {
  const containerRef = useRef(null);
  // const enabled = settingsStore.use.checkedComponents();
  // const initialValue = usePlaygroundValue(id);
  // const key = useInitialValueVersion(initialValue);

  // const plugins = usePlaygroundPlugins({
  //   id,
  //   components: createPlateUI(
  //     {},
  //     {
  //       placeholder: true,
  //       draggable: true,
  //     },
  //   ),
  // });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative">
        <Plate
          // key={key}
          initialValue={[
            {
              type: "p",
              children: [{ text: "Welcome to PKMDX!" }],
            },
          ]}
          plugins={plugins}
          normalizeInitialValue
        >
          <CommentsProvider>
            <FixedToolbar>
              <PlaygroundFixedToolbarButtons id={id} />
            </FixedToolbar>

            <div className="flex w-full">
              <div
                ref={containerRef}
                className={cn(
                  "relative flex w-full overflow-x-auto",
                  "[&_.slate-start-area-top]:!h-4",
                  "[&_.slate-start-area-left]:!w-3 [&_.slate-start-area-right]:!w-3",
                  !id
                    && "md:[&_.slate-start-area-left]:!w-[64px] md:[&_.slate-start-area-right]:!w-[64px]",
                )}
              >
                <Editor
                  {...editableProps}
                  placeholder=""
                  variant="ghost"
                  size="md"
                  focusRing={false}
                  className={cn(
                    editableProps.className,
                    "px-8",
                    "min-h-[920px] pb-[20vh] pt-4 md:px-[96px]",
                  )}
                />

                <FloatingToolbar>
                  <PlaygroundFloatingToolbarButtons />
                </FloatingToolbar>

                <MentionCombobox
                  items={[
                    {
                      key: "a",
                      text: "Something",
                    },
                  ]}
                />

                <CursorOverlay containerRef={containerRef} />
              </div>

              <CommentsPopover />
            </div>
          </CommentsProvider>
        </Plate>
      </div>
    </DndProvider>
  );
}
