import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";
import { MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate-font";
import { KEY_LIST_STYLE_TYPE, ListStyleType } from "@udecode/plate-indent-list";
import { ELEMENT_OL, ELEMENT_UL } from "@udecode/plate-list";
import { ELEMENT_IMAGE } from "@udecode/plate-media";
import React from "react";

import { Icons, iconVariants } from "@/components/icons";
import { AlignDropdownMenu } from "@/components/plate-ui/align-dropdown-menu";
import { ColorDropdownMenu } from "@/components/plate-ui/color-dropdown-menu";
import { CommentToolbarButton } from "@/components/plate-ui/comment-toolbar-button";
import { EmojiDropdownMenu } from "@/components/plate-ui/emoji-dropdown-menu";
import { IndentListToolbarButton } from "@/components/plate-ui/indent-list-toolbar-button";
import { IndentToolbarButton } from "@/components/plate-ui/indent-toolbar-button";
import { LineHeightDropdownMenu } from "@/components/plate-ui/line-height-dropdown-menu";
import { LinkToolbarButton } from "@/components/plate-ui/link-toolbar-button";
import { ListToolbarButton } from "@/components/plate-ui/list-toolbar-button";
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button";
import { MediaToolbarButton } from "@/components/plate-ui/media-toolbar-button";
import { OutdentToolbarButton } from "@/components/plate-ui/outdent-toolbar-button";
import { TableDropdownMenu } from "@/components/plate-ui/table-dropdown-menu";
import { ToolbarGroup } from "@/components/plate-ui/toolbar";
import { ValueId } from "@/config/customizer-plugins";

import { PlaygroundInsertDropdownMenu } from "./playground-insert-dropdown-menu";
import { PlaygroundModeDropdownMenu } from "./playground-mode-dropdown-menu";
import { PlaygroundMoreDropdownMenu } from "./playground-more-dropdown-menu";
import { PlaygroundTurnIntoDropdownMenu } from "./playground-turn-into-dropdown-menu";

export function PlaygroundFixedToolbarButtons({ id }: { id?: ValueId }) {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          // Conceal the first separator on each line using overflow
          transform: "translateX(calc(-1px))",
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <PlaygroundInsertDropdownMenu />
              <PlaygroundTurnIntoDropdownMenu />
            </ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                <Icons.italic />
              </MarkToolbarButton>
              <MarkToolbarButton
                tooltip="Underline (⌘+U)"
                nodeType={MARK_UNDERLINE}
              >
                <Icons.underline />
              </MarkToolbarButton>

              <>
                <MarkToolbarButton
                  tooltip="Strikethrough (⌘+⇧+M)"
                  nodeType={MARK_STRIKETHROUGH}
                >
                  <Icons.strikethrough />
                </MarkToolbarButton>
                <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
                  <Icons.code />
                </MarkToolbarButton>
              </>

              <>
                <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
                  <Icons.color
                    className={iconVariants({ variant: "toolbar" })}
                  />
                </ColorDropdownMenu>
                <ColorDropdownMenu
                  nodeType={MARK_BG_COLOR}
                  tooltip="Highlight Color"
                >
                  <Icons.bg
                    className={iconVariants({ variant: "toolbar" })}
                  />
                </ColorDropdownMenu>
              </>
            </ToolbarGroup>

            <ToolbarGroup>
              <AlignDropdownMenu />

              <LineHeightDropdownMenu />

              <IndentListToolbarButton nodeType={ListStyleType.Disc} />
              <IndentListToolbarButton nodeType={ListStyleType.Decimal} />

              {
                /* {isEnabled("list", id) && !indentList && (
                <>
                  <ListToolbarButton nodeType={ELEMENT_UL} />
                  <ListToolbarButton nodeType={ELEMENT_OL} />
                </>
              )} */
              }

              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
              <LinkToolbarButton />

              <MediaToolbarButton nodeType={ELEMENT_IMAGE} />

              <TableDropdownMenu />

              <EmojiDropdownMenu />

              <PlaygroundMoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />

        <ToolbarGroup noSeparator>
          <CommentToolbarButton />
          <PlaygroundModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  );
}
