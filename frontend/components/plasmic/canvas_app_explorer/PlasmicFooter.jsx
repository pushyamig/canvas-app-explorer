// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: SxuS7aSzfTV9l
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: thj0p9NXEH81i/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicFooter.css"; // plasmic-import: SxuS7aSzfTV9l/css

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
        "Footer__root__sI9X3"
      )}
    >
      <div
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__div",
          "Footer__box__zZokF"
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Footer__box__rfGbA"
          )}
        >
          <div
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "__wab_text",
              "Footer__box__l8OFu"
            )}
          >
            {"© Copyright. "}
          </div>

          <a
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__a",
              "__wab_text",
              "Footer__link__cFZm1"
            )}
            href={"https://www.plasmic.app/"}
          >
            {"University of Michigan"}
          </a>
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */