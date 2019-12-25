/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from "react";
import { dedent } from "dentist";
// https://github.com/conorhastings/react-syntax-highlighter#prism
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// See https://github.com/PrismJS/prism-themes
import { duotoneDark as highlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Portlet,
  PortletBody,
  PortletHeader,
  PortletHeaderToolbar
} from "./Portlet";

export function CodeBlock({ code, language, disableCopy }) {
  const children = useMemo(() => dedent(code), [code]);

  return (
    <div className="kt-portlet__code">
      <SyntaxHighlighter language={language} style={highlightStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default function CodeExample({ jsCode, children, beforeCodeTitle }) {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <Portlet className="banner-glass">
      <PortletHeader 
        title={beforeCodeTitle}
        toolbar={
          jsCode && (
            <PortletHeaderToolbar>
              <button type="button" onClick={() => setIsCodeVisible(wasVisible => !wasVisible)} className="btn btn-label-info btn-sm btn-icon btn-icon-md ng-star-inserted" >
                <i className="la la-code" />
              </button>
            </PortletHeaderToolbar>
          )
        }
      />

      <PortletBody style={{ padding: "0px" }}>
        {jsCode && isCodeVisible && ( <CodeBlock language="html" code={jsCode} /> )}
        {children && <div className="kt-portlet__preview" style={{ background: "transparent" }}>{children}</div>}
      </PortletBody>
    </Portlet>
  );
}