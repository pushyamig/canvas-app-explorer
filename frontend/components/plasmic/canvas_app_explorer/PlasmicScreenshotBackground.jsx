// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: pi3PBoRiWhk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "../library_plasmic_color_type/plasmic_library_plasmic_color_type.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicScreenshotBackground.css"; // plasmic-import: pi3PBoRiWhk/css
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: mHiiVlCicgnAZ/icon
import HeartOIcon from "./icons/PlasmicIcon__HeartO"; // plasmic-import: dLxlPA7Q9UK0YC/icon
import ExpandIcon from "./icons/PlasmicIcon__Expand"; // plasmic-import: 7eRarYWOIlq6_o/icon

export const PlasmicScreenshotBackground__VariantProps = new Array();

export const PlasmicScreenshotBackground__ArgProps = new Array("image");

function PlasmicScreenshotBackground__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "plasmic_default_styles",
        "plasmic_tokens",
        "plasmic_tokens",
        "ScreenshotBackground__root__urUwk"
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__img",
              "ScreenshotBackground__img___96UW3"
            )}
            src={"/static/plasmic/canvas_app_explorer/images/panopto.png"}
          />
        ),

        value: args.image
      })}

      {false ? (
        <div
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "ScreenshotBackground__freeBox__vqI05"
          )}
        >
          <div
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "__wab_text",
              "ScreenshotBackground__text__gSnZs"
            )}
          >
            {"Sale"}
          </div>
        </div>
      ) : null}
      {(triggers.hover_root ? false : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "ScreenshotBackground__freeBox__on4Ip"
          )}
        >
          <ShoppingCartIcon
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__svg",
              "ScreenshotBackground__svg__jKeBo"
            )}
            role={"img"}
          />

          <div
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "__wab_text",
              "ScreenshotBackground__text__cgK9F"
            )}
          >
            {"Add to cart"}
          </div>

          <HeartOIcon
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__svg",
              "ScreenshotBackground__svg___84Ou9"
            )}
            role={"img"}
          />

          <ExpandIcon
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__svg",
              "ScreenshotBackground__svg__fyH0K"
            )}
            role={"img"}
          />
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicScreenshotBackground__ArgProps,
      internalVariantPropNames: PlasmicScreenshotBackground__VariantProps
    });

    return PlasmicScreenshotBackground__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScreenshotBackground";
  } else {
    func.displayName = `PlasmicScreenshotBackground.${nodeName}`;
  }
  return func;
}

export const PlasmicScreenshotBackground = Object.assign(
  // Top-level PlasmicScreenshotBackground renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicScreenshotBackground
    internalVariantProps: PlasmicScreenshotBackground__VariantProps,
    internalArgProps: PlasmicScreenshotBackground__ArgProps
  }
);

export default PlasmicScreenshotBackground;
/* prettier-ignore-end */
