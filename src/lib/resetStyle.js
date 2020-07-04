import { css } from '@emotion/core';

export default () => css`
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin:0;
        padding:0;
        border:0;
        outline:0;
        font-size:100%;
        vertical-align:baseline;
        background:transparent;
    }
    body {
        letter-spacing: 0.01rem;
        font-family: "游ゴシック体","YuGothic", "游ゴシック Medium", "游ゴシック","Yu Gothic","ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","ＭＳ Ｐゴシック","MS PGothic",sans-serif;
    }
   ...
`;