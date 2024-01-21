// "use client";

// import { withProps } from "@udecode/cn";
// import { createAlignPlugin } from "@udecode/plate-alignment";
// import { createAutoformatPlugin } from "@udecode/plate-autoformat";
// import {
//   createBoldPlugin,
//   createCodePlugin,
//   createItalicPlugin,
//   createStrikethroughPlugin,
//   createSubscriptPlugin,
//   createSuperscriptPlugin,
//   createUnderlinePlugin,
//   MARK_BOLD,
//   MARK_CODE,
//   MARK_ITALIC,
//   MARK_STRIKETHROUGH,
//   MARK_SUBSCRIPT,
//   MARK_SUPERSCRIPT,
//   MARK_UNDERLINE,
// } from "@udecode/plate-basic-marks";
// import { createBlockquotePlugin, ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
// import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
// import { createCaptionPlugin } from "@udecode/plate-caption";
// import {
//   createCodeBlockPlugin,
//   ELEMENT_CODE_BLOCK,
//   ELEMENT_CODE_LINE,
//   ELEMENT_CODE_SYNTAX,
// } from "@udecode/plate-code-block";
// import { createComboboxPlugin } from "@udecode/plate-combobox";
// import { CommentsProvider, createCommentsPlugin, MARK_COMMENT } from "@udecode/plate-comments";
// import { createPlugins, Plate, PlateLeaf, RenderAfterEditable } from "@udecode/plate-common";
// import { createDndPlugin } from "@udecode/plate-dnd";
// import { createEmojiPlugin } from "@udecode/plate-emoji";
// import { createExcalidrawPlugin, ELEMENT_EXCALIDRAW } from "@udecode/plate-excalidraw";
// import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontSizePlugin } from "@udecode/plate-font";
// import {
//   createHeadingPlugin,
//   ELEMENT_H1,
//   ELEMENT_H2,
//   ELEMENT_H3,
//   ELEMENT_H4,
//   ELEMENT_H5,
//   ELEMENT_H6,
// } from "@udecode/plate-heading";
// import { createHighlightPlugin, MARK_HIGHLIGHT } from "@udecode/plate-highlight";
// import { createHorizontalRulePlugin, ELEMENT_HR } from "@udecode/plate-horizontal-rule";
// import { createIndentPlugin } from "@udecode/plate-indent";
// import { createIndentListPlugin } from "@udecode/plate-indent-list";
// import { createJuicePlugin } from "@udecode/plate-juice";
// import { createKbdPlugin, MARK_KBD } from "@udecode/plate-kbd";
// import { createLineHeightPlugin } from "@udecode/plate-line-height";
// import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
// import { createTodoListPlugin, ELEMENT_TODO_LI } from "@udecode/plate-list";
// import { createImagePlugin, createMediaEmbedPlugin, ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from "@udecode/plate-media";
// import { createMentionPlugin, ELEMENT_MENTION, ELEMENT_MENTION_INPUT } from "@udecode/plate-mention";
// import { createNodeIdPlugin } from "@udecode/plate-node-id";
// import { createParagraphPlugin, ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
// import { createResetNodePlugin } from "@udecode/plate-reset-node";
// import { createDeletePlugin, createSelectOnBackspacePlugin } from "@udecode/plate-select";
// import { createBlockSelectionPlugin } from "@udecode/plate-selection";
// import { createDeserializeCsvPlugin } from "@udecode/plate-serializer-csv";
// import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
// import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
// import { createTabbablePlugin } from "@udecode/plate-tabbable";
// import { createTablePlugin, ELEMENT_TABLE, ELEMENT_TD, ELEMENT_TH, ELEMENT_TR } from "@udecode/plate-table";
// import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// import { BlockquoteElement } from "@/components/plate-ui/blockquote-element";
// import { CodeBlockElement } from "@/components/plate-ui/code-block-element";
// import { CodeLeaf } from "@/components/plate-ui/code-leaf";
// import { CodeLineElement } from "@/components/plate-ui/code-line-element";
// import { CodeSyntaxLeaf } from "@/components/plate-ui/code-syntax-leaf";
// import { CommentLeaf } from "@/components/plate-ui/comment-leaf";
// import { CommentsPopover } from "@/components/plate-ui/comments-popover";
// import { Editor } from "@/components/plate-ui/editor";
// import { EmojiCombobox } from "@/components/plate-ui/emoji-combobox";
// import { ExcalidrawElement } from "@/components/plate-ui/excalidraw-element";
// import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
// import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
// import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
// import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
// import { HeadingElement } from "@/components/plate-ui/heading-element";
// import { HighlightLeaf } from "@/components/plate-ui/highlight-leaf";
// import { HrElement } from "@/components/plate-ui/hr-element";
// import { ImageElement } from "@/components/plate-ui/image-element";
// import { KbdLeaf } from "@/components/plate-ui/kbd-leaf";
// import { LinkElement } from "@/components/plate-ui/link-element";
// import { LinkFloatingToolbar } from "@/components/plate-ui/link-floating-toolbar";
// import { MediaEmbedElement } from "@/components/plate-ui/media-embed-element";
// import { MentionCombobox } from "@/components/plate-ui/mention-combobox";
// import { MentionElement } from "@/components/plate-ui/mention-element";
// import { MentionInputElement } from "@/components/plate-ui/mention-input-element";
// import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
// import { withPlaceholders } from "@/components/plate-ui/placeholder";
// import { TableCellElement, TableCellHeaderElement } from "@/components/plate-ui/table-cell-element";
// import { TableElement } from "@/components/plate-ui/table-element";
// import { TableRowElement } from "@/components/plate-ui/table-row-element";
// import { TodoListElement } from "@/components/plate-ui/todo-list-element";
// import { withDraggables } from "@/components/plate-ui/with-draggables";

// const plugins = createPlugins(
//   [
//     createParagraphPlugin(),
//     createHeadingPlugin(),
//     createBlockquotePlugin(),
//     createCodeBlockPlugin(),
//     createHorizontalRulePlugin(),
//     createLinkPlugin({
//       renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
//     }),
//     createImagePlugin(),
//     createMediaEmbedPlugin(),
//     createCaptionPlugin({
//       options: {
//         pluginKeys: [
//           // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
//         ],
//       },
//     }),
//     createMentionPlugin(),
//     createTablePlugin(),
//     createTodoListPlugin(),
//     createExcalidrawPlugin(),
//     createBoldPlugin(),
//     createItalicPlugin(),
//     createUnderlinePlugin(),
//     createStrikethroughPlugin(),
//     createCodePlugin(),
//     createSubscriptPlugin(),
//     createSuperscriptPlugin(),
//     createFontColorPlugin(),
//     createFontBackgroundColorPlugin(),
//     createFontSizePlugin(),
//     createHighlightPlugin(),
//     createKbdPlugin(),
//     createAlignPlugin({
//       inject: {
//         props: {
//           validTypes: [
//             ELEMENT_PARAGRAPH,
//             // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
//           ],
//         },
//       },
//     }),
//     createIndentPlugin({
//       inject: {
//         props: {
//           validTypes: [
//             ELEMENT_PARAGRAPH,
//             // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
//           ],
//         },
//       },
//     }),
//     createIndentListPlugin({
//       inject: {
//         props: {
//           validTypes: [
//             ELEMENT_PARAGRAPH,
//             // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
//           ],
//         },
//       },
//     }),
//     createLineHeightPlugin({
//       inject: {
//         props: {
//           defaultNodeValue: 1.5,
//           validNodeValues: [1, 1.2, 1.5, 2, 3],
//           validTypes: [
//             ELEMENT_PARAGRAPH,
//             // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
//           ],
//         },
//       },
//     }),
//     createComboboxPlugin(),
//     createDndPlugin({
//       options: { enableScroller: true },
//     }),
//     createEmojiPlugin({
//       renderAfterEditable: EmojiCombobox,
//     }),
//     createExitBreakPlugin({
//       options: {
//         rules: [
//           {
//             hotkey: "mod+enter",
//           },
//           {
//             hotkey: "mod+shift+enter",
//             before: true,
//           },
//           {
//             hotkey: "enter",
//             query: {
//               start: true,
//               end: true,
//               // allow: KEYS_HEADING,
//             },
//             relative: true,
//             level: 1,
//           },
//         ],
//       },
//     }),
//     createNodeIdPlugin(),
//     createResetNodePlugin({
//       options: {
//         rules: [
//           // Usage: https://platejs.org/docs/reset-node
//         ],
//       },
//     }),
//     createSelectOnBackspacePlugin({
//       options: {
//         query: {
//           allow: [
//             // ELEMENT_IMAGE, ELEMENT_HR
//           ],
//         },
//       },
//     }),
//     createDeletePlugin(),
//     createSoftBreakPlugin({
//       options: {
//         rules: [
//           { hotkey: "shift+enter" },
//           {
//             hotkey: "enter",
//             query: {
//               allow: [
//                 // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
//               ],
//             },
//           },
//         ],
//       },
//     }),
//     createTabbablePlugin(),
//     createTrailingBlockPlugin({
//       options: { type: ELEMENT_PARAGRAPH },
//     }),
//     createCommentsPlugin(),
//     createAutoformatPlugin({
//       options: {
//         rules: [
//           // Usage: https://platejs.org/docs/autoformat
//         ],
//         enableUndoOnDelete: true,
//       },
//     }),
//     createBlockSelectionPlugin({
//       options: {
//         sizes: {
//           top: 0,
//           bottom: 0,
//         },
//       },
//     }),
//     createDeserializeDocxPlugin(),
//     createDeserializeCsvPlugin(),
//     createDeserializeMdPlugin(),
//     createJuicePlugin(),
//   ],
//   {
//     components: withDraggables(withPlaceholders({
//       [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
//       [ELEMENT_CODE_BLOCK]: CodeBlockElement,
//       [ELEMENT_CODE_LINE]: CodeLineElement,
//       [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
//       [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
//       [ELEMENT_HR]: HrElement,
//       [ELEMENT_IMAGE]: ImageElement,
//       [ELEMENT_LINK]: LinkElement,
//       [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
//       [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
//       [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
//       [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
//       [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
//       [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
//       [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
//       [ELEMENT_MENTION]: MentionElement,
//       [ELEMENT_MENTION_INPUT]: MentionInputElement,
//       [ELEMENT_PARAGRAPH]: ParagraphElement,
//       [ELEMENT_TABLE]: TableElement,
//       [ELEMENT_TR]: TableRowElement,
//       [ELEMENT_TD]: TableCellElement,
//       [ELEMENT_TH]: TableCellHeaderElement,
//       [ELEMENT_TODO_LI]: TodoListElement,
//       [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
//       [MARK_CODE]: CodeLeaf,
//       [MARK_COMMENT]: CommentLeaf,
//       [MARK_HIGHLIGHT]: HighlightLeaf,
//       [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
//       [MARK_KBD]: KbdLeaf,
//       [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
//       [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
//       [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
//       [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
//     })),
//   },
// );

// const initialValue = [
//   {
//     id: "1",
//     type: "p",
//     children: [{ text: "Hello, World!" }],
//   },
// ];

// export function PlateEditor() {
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <CommentsProvider users={{}} myUserId="1">
//         <Plate plugins={plugins} initialValue={initialValue}>
//           <FixedToolbar>
//             <FixedToolbarButtons />
//           </FixedToolbar>

//           <Editor />

//           <FloatingToolbar>
//             <FloatingToolbarButtons />
//           </FloatingToolbar>
//           <MentionCombobox items={[]} />
//           <CommentsPopover />
//         </Plate>
//       </CommentsProvider>
//     </DndProvider>
//   );
// }

"use client";

import { createPlateUI } from "@/plate/create-plate-ui";
import { CommentsProvider } from "@/plate/demo/comments/CommentsProvider";
import { editableProps } from "@/plate/demo/editableProps";
import { isEnabled } from "@/plate/demo/is-enabled";
import { alignPlugin } from "@/plate/demo/plugins/alignPlugin";
import { autoformatIndentLists } from "@/plate/demo/plugins/autoformatIndentLists";
import { autoformatLists } from "@/plate/demo/plugins/autoformatLists";
import { autoformatRules } from "@/plate/demo/plugins/autoformatRules";
import { dragOverCursorPlugin } from "@/plate/demo/plugins/dragOverCursorPlugin";
import { emojiPlugin } from "@/plate/demo/plugins/emojiPlugin";
import { exitBreakPlugin } from "@/plate/demo/plugins/exitBreakPlugin";
import { forcedLayoutPlugin } from "@/plate/demo/plugins/forcedLayoutPlugin";
import { indentPlugin } from "@/plate/demo/plugins/indentPlugin";
import { lineHeightPlugin } from "@/plate/demo/plugins/lineHeightPlugin";
import { linkPlugin } from "@/plate/demo/plugins/linkPlugin";
import { resetBlockTypePlugin } from "@/plate/demo/plugins/resetBlockTypePlugin";
import { selectOnBackspacePlugin } from "@/plate/demo/plugins/selectOnBackspacePlugin";
import { softBreakPlugin } from "@/plate/demo/plugins/softBreakPlugin";
import { tabbablePlugin } from "@/plate/demo/plugins/tabbablePlugin";
import { trailingBlockPlugin } from "@/plate/demo/plugins/trailingBlockPlugin";
import { MENTIONABLES } from "@/plate/demo/values/mentionables";
import { usePlaygroundValue } from "@/plate/demo/values/usePlaygroundValue";
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

import { settingsStore } from "@/components/context/settings-store";
import { PlaygroundFixedToolbarButtons } from "@/components/plate-ui/playground-fixed-toolbar-buttons";
import { PlaygroundFloatingToolbarButtons } from "@/components/plate-ui/playground-floating-toolbar-buttons";
import { ValueId } from "@/config/customizer-plugins";
import { captionPlugin } from "@/lib/plate/demo/plugins/captionPlugin";
import { CommentsPopover } from "@/registry/default/plate-ui/comments-popover";
import { CursorOverlay } from "@/registry/default/plate-ui/cursor-overlay";
import { Editor } from "@/registry/default/plate-ui/editor";
import { FixedToolbar } from "@/registry/default/plate-ui/fixed-toolbar";
import { FloatingToolbar } from "@/registry/default/plate-ui/floating-toolbar";
import { MentionCombobox } from "@/registry/default/plate-ui/mention-combobox";

export const usePlaygroundPlugins = ({
  id,
  components = createPlateUI(),
}: {
  id?: ValueId;
  components?: Record<string, PlatePluginComponent>;
} = {}) => {
  const enabled = settingsStore.use.checkedPlugins();

  const autoformatOptions = {
    rules: [...autoformatRules],
    enableUndoOnDelete: true,
  };

  if (id === "indentlist") {
    autoformatOptions.rules.push(...autoformatIndentLists);
  } else if (id === "list") {
    autoformatOptions.rules.push(...autoformatLists);
  } else if (!!enabled.listStyleType) {
    autoformatOptions.rules.push(...autoformatIndentLists);
  } else if (!!enabled.list) {
    autoformatOptions.rules.push(...autoformatLists);
  }

  return useMemo(
    () => {
      return createPlugins(
        [
          // Nodes
          createParagraphPlugin({ enabled: !!enabled.p }),
          createHeadingPlugin({ enabled: !!enabled.heading }),
          createBlockquotePlugin({ enabled: !!enabled.blockquote }),
          createCodeBlockPlugin({ enabled: !!enabled.code_block }),
          createHorizontalRulePlugin({ enabled: !!enabled.hr }),
          createLinkPlugin({ ...linkPlugin, enabled: !!enabled.a }),
          createListPlugin({
            enabled: id === "list" || !!enabled.list,
          }),
          createImagePlugin({ enabled: !!enabled.img }),
          createMediaEmbedPlugin({ enabled: !!enabled.media_embed }),
          createCaptionPlugin({ ...captionPlugin, enabled: !!enabled.caption }),
          createMentionPlugin({
            enabled: !!enabled.mention,
            options: {
              triggerPreviousCharPattern: /^$|^[\s"']$/,
            },
          }),
          createTablePlugin({
            enabled: !!enabled.table,
            options: {
              enableMerging: id === "tableMerge",
            },
          }),
          createTodoListPlugin({ enabled: !!enabled.action_item }),
          createExcalidrawPlugin({ enabled: !!enabled.excalidraw }),

          // Marks
          createBoldPlugin({ enabled: !!enabled.bold }),
          createItalicPlugin({ enabled: !!enabled.italic }),
          createUnderlinePlugin({ enabled: !!enabled.underline }),
          createStrikethroughPlugin({ enabled: !!enabled.strikethrough }),
          createCodePlugin({ enabled: !!enabled.code }),
          createSubscriptPlugin({ enabled: !!enabled.subscript }),
          createSuperscriptPlugin({ enabled: !!enabled.superscript }),
          createFontColorPlugin({ enabled: !!enabled.color }),
          createFontBackgroundColorPlugin({
            enabled: !!enabled.backgroundColor,
          }),
          createFontSizePlugin({ enabled: !!enabled.fontSize }),
          createHighlightPlugin({ enabled: !!enabled.highlight }),
          createKbdPlugin({ enabled: !!enabled.kbd }),

          // Block Style
          createAlignPlugin({ ...alignPlugin, enabled: !!enabled.align }),
          createIndentPlugin({ ...indentPlugin, enabled: !!enabled.indent }),
          createIndentListPlugin({
            ...indentPlugin,
            enabled: id === "indentlist" || !!enabled.listStyleType,
          }),
          createLineHeightPlugin({
            ...lineHeightPlugin,
            enabled: !!enabled.lineHeight,
          }),

          // Functionality
          createAutoformatPlugin({
            enabled: !!enabled.autoformat,
            options: autoformatOptions,
          }),
          createBlockSelectionPlugin({
            options: {
              sizes: {
                top: 0,
                bottom: 0,
              },
            },
            enabled: id === "blockselection" || !!enabled.blockSelection,
          }),
          createComboboxPlugin({ enabled: !!enabled.combobox }),
          createDndPlugin({
            options: { enableScroller: true },
            enabled: !!enabled.dnd,
          }),
          createEmojiPlugin({ ...emojiPlugin, enabled: !!enabled.emoji }),
          createExitBreakPlugin({
            ...exitBreakPlugin,
            enabled: !!enabled.exitBreak,
          }),
          createNodeIdPlugin({ enabled: !!enabled.nodeId }),
          createNormalizeTypesPlugin({
            ...forcedLayoutPlugin,
            enabled: !!enabled.normalizeTypes,
          }),
          createResetNodePlugin({
            ...resetBlockTypePlugin,
            enabled: !!enabled.resetNode,
          }),
          createSelectOnBackspacePlugin({
            ...selectOnBackspacePlugin,
            enabled: !!enabled.selectOnBackspace,
          }),
          createDeletePlugin({
            enabled: !!enabled.delete,
          }),
          createSingleLinePlugin({
            enabled: id === "singleline" || !!enabled.singleLine,
          }),
          createSoftBreakPlugin({
            ...softBreakPlugin,
            enabled: !!enabled.softBreak,
          }),
          createTabbablePlugin({
            ...tabbablePlugin,
            enabled: !!enabled.tabbable,
          }),
          createTrailingBlockPlugin({
            ...trailingBlockPlugin,
            enabled: id !== "singleline" && !!enabled.trailingBlock,
          }),
          { ...dragOverCursorPlugin, enabled: !!enabled.dragOverCursor },

          // Collaboration
          createCommentsPlugin({ enabled: !!enabled.comment }),

          // Deserialization
          createDeserializeDocxPlugin({ enabled: !!enabled.deserializeDocx }),
          createDeserializeMdPlugin({ enabled: !!enabled.deserializeMd }),
          createJuicePlugin({ enabled: !!enabled.juice }),
        ],
        {
          components,
        },
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enabled],
  );
};

// reset editor when initialValue changes
export const useInitialValueVersion = (initialValue: Value) => {
  const enabled = settingsStore.use.checkedPlugins();
  const [version, setVersion] = useState(1);
  const prevEnabled = useRef(enabled);
  const prevInitialValueRef = useRef(initialValue);

  useEffect(() => {
    if (enabled === prevEnabled.current) return;
    prevEnabled.current = enabled;
    setVersion((v) => v + 1);
  }, [enabled]);

  useEffect(() => {
    if (initialValue === prevInitialValueRef.current) return;
    prevInitialValueRef.current = initialValue;
    setVersion((v) => v + 1);
  }, [initialValue]);

  return version;
};

export function PlateEditor({ id }: { id?: ValueId }) {
  const containerRef = useRef(null);
  const enabled = settingsStore.use.checkedComponents();
  const initialValue = usePlaygroundValue(id);
  const key = useInitialValueVersion(initialValue);

  const plugins = usePlaygroundPlugins({
    id,
    components: createPlateUI(
      {},
      {
        placeholder: isEnabled("placeholder", id),
        draggable: isEnabled("dnd", id),
      },
    ),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative">
        <Plate
          key={key}
          initialValue={initialValue}
          plugins={plugins}
          normalizeInitialValue
        >
          <CommentsProvider>
            {enabled["fixed-toolbar"] && (
              <FixedToolbar>
                {enabled["fixed-toolbar-buttons"] && <PlaygroundFixedToolbarButtons id={id} />}
              </FixedToolbar>
            )}

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
                    !id && "min-h-[920px] pb-[20vh] pt-4 md:px-[96px]",
                    id && "pb-8 pt-2",
                  )}
                />

                {enabled["floating-toolbar"] && (
                  <FloatingToolbar>
                    {enabled["floating-toolbar-buttons"] && <PlaygroundFloatingToolbarButtons id={id} />}
                  </FloatingToolbar>
                )}

                {isEnabled("mention", id, enabled["mention-combobox"]) && <MentionCombobox items={MENTIONABLES} />}

                {isEnabled("cursoroverlay", id) && <CursorOverlay containerRef={containerRef} />}
              </div>

              {isEnabled("comment", id, enabled["comments-popover"]) && <CommentsPopover />}
            </div>
          </CommentsProvider>
        </Plate>
      </div>
    </DndProvider>
  );
}
