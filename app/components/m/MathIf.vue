<template>
  <UCard>
    <h1>
      Math using CSS only <code>function()</code> & <code>if()</code> functions.
    </h1>
    <p class="msg-supports">
      Sorry, your browser doesn't support advanced <code>if()</code> & <code>function()</code> functions
    </p>
    <div class="math-wrapper pt-20">
      <select class="operand" name="operand1">
        <option value="0">
          0
        </option>
        <option value="1">
          1
        </option>
        <option value="2">
          2
        </option>
        <option value="3" selected>
          3
        </option>
        <option value="4">
          4
        </option>
        <option value="5">
          5
        </option>
        <option value="6">
          6
        </option>
        <option value="7">
          7
        </option>
        <option value="8">
          8
        </option>
        <option value="9">
          9
        </option>
        <option value="10">
          10
        </option>
      </select>
      <select class="operator" name="operator">
        <option value="+">
          +
        </option>
        <option value="-" selected>
          −
        </option>
        <option value="*">
          ×
        </option>
        <option value="/">
          ÷
        </option>
      </select>
      <select class="operand" name="operand2">
        <option value="0">
          0
        </option>
        <option value="1" selected>
          1
        </option>
        <option value="2">
          2
        </option>
        <option value="3">
          3
        </option>
        <option value="4">
          4
        </option>
        <option value="5">
          5
        </option>
        <option value="6">
          6
        </option>
        <option value="7">
          7
        </option>
        <option value="8">
          8
        </option>
        <option value="9">
          9
        </option>
        <option value="10">
          10
        </option>
      </select>
      <span class="equals">=</span>
      <div class="result" />
    </div>
  </UCard>
</template>

<style scoped>
@layer base, demo;

@layer demo {
  .math-wrapper {
    display: none;
  }

  @supports (appearance: base-select) {

    :root {
      --option-radius: 5px;
      --option-color: var(--clr-text);
      --option-color-current: hotpink;
      --option-color-hover: dodgerblue;
    }

    @function --f-add(--x <integer>, --y <integer>) returns <integer> {
      result: calc(var(--x) + var(--y));
    }

    @function --f-subtract(--x <integer>, --y <integer>) returns <integer> {
      result: calc(var(--x) - var(--y));
    }

    @function --f-multiply(--x <integer>, --y <integer>) returns <integer> {
      result: calc(var(--x) * var(--y));
    }

    @function --f-divide(--x <integer>, --y <integer>) returns <integer> {
      result: calc(var(--x) / var(--y));
    }

    .math-wrapper {
      --math: if(style(--operator: "+"): --f-add(var(--a), var(--b));
          style(--operator: "-"): --f-subtract(var(--a), var(--b));
          style(--operator: "*"): --f-multiply(var(--a), var(--b));
          style(--operator: "/"): --f-divide(var(--a), var(--b));
        );

      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      font-size: clamp(1rem, 2.5vw + 0.4rem, 2rem);
      line-height: 1.2;
    }

    .math-wrapper:has(select[name="operand1"] option[value="0"]:checked) {
      --a: 0;
    }

    .math-wrapper:has(select[name="operand1"] option[value="1"]:checked) {
      --a: 1;
    }

    .math-wrapper:has(select[name="operand1"] option[value="2"]:checked) {
      --a: 2;
    }

    .math-wrapper:has(select[name="operand1"] option[value="3"]:checked) {
      --a: 3;
    }

    .math-wrapper:has(select[name="operand1"] option[value="4"]:checked) {
      --a: 4;
    }

    .math-wrapper:has(select[name="operand1"] option[value="5"]:checked) {
      --a: 5;
    }

    .math-wrapper:has(select[name="operand1"] option[value="6"]:checked) {
      --a: 6;
    }

    .math-wrapper:has(select[name="operand1"] option[value="7"]:checked) {
      --a: 7;
    }

    .math-wrapper:has(select[name="operand1"] option[value="8"]:checked) {
      --a: 8;
    }

    .math-wrapper:has(select[name="operand1"] option[value="9"]:checked) {
      --a: 9;
    }

    .math-wrapper:has(select[name="operand1"] option[value="10"]:checked) {
      --a: 10;
    }

    /* Map number "b" (0–10) */
    .math-wrapper:has(select[name="operand2"] option[value="0"]:checked) {
      --b: 0;
    }

    .math-wrapper:has(select[name="operand2"] option[value="1"]:checked) {
      --b: 1;
    }

    .math-wrapper:has(select[name="operand2"] option[value="2"]:checked) {
      --b: 2;
    }

    .math-wrapper:has(select[name="operand2"] option[value="3"]:checked) {
      --b: 3;
    }

    .math-wrapper:has(select[name="operand2"] option[value="4"]:checked) {
      --b: 4;
    }

    .math-wrapper:has(select[name="operand2"] option[value="5"]:checked) {
      --b: 5;
    }

    .math-wrapper:has(select[name="operand2"] option[value="6"]:checked) {
      --b: 6;
    }

    .math-wrapper:has(select[name="operand2"] option[value="7"]:checked) {
      --b: 7;
    }

    .math-wrapper:has(select[name="operand2"] option[value="8"]:checked) {
      --b: 8;
    }

    .math-wrapper:has(select[name="operand2"] option[value="9"]:checked) {
      --b: 9;
    }

    .math-wrapper:has(select[name="operand2"] option[value="10"]:checked) {
      --b: 10;
    }

    .math-wrapper:has(select[name="operator"] option[value="+"]:checked) {
      --operator: "+";
    }

    .math-wrapper:has(select[name="operator"] option[value="-"]:checked) {
      --operator: "-";
    }

    .math-wrapper:has(select[name="operator"] option[value="*"]:checked) {
      --operator: "*";
    }

    .math-wrapper:has(select[name="operator"] option[value="/"]:checked) {
      --operator: "/";
    }

    .result {
      position: relative;
      border-radius: var(--option-radius);
      border: 1px solid dodgerblue;
      color: dodgerblue;
      padding: 0.25em 0.5em;
      display: grid;
      place-items: center;
      min-width: 6ch;

      &::after {
        counter-reset: result var(--math);
        content: counter(result);
      }
    }

    /* base styling for the select and its picker */
    select,
    ::picker(select) {
      appearance: base-select;
    }

    /* remove default option checkmarks & picker icon */
    option::checkmark,
    select::picker-icon {
      display: none;
    }

    /* select main element */
    select {
      background: transparent;
      position: relative;
      border-radius: var(--option-radius);
      width: 4ch;
      display: grid;
      place-content: center;
      transition: outline 300ms ease-in-out;

      &.operator {
        border-radius: 9in;
        width: 3ch;
        aspect-ratio: 1;
        scale: 0.9;
      }

      &:where(:focus-visible, :hover) {
        outline: 1px dashed var(--option-color-hover);
        outline-offset: 3px;
      }
    }

    ::picker(select) {
      top: anchor(center);
      left: anchor(center);
      translate: -50% -50%;
      border-radius: var(--option-radius);
      transition: all 500ms ease-in-out;
    }

    option {
      outline: none;
      display: grid;
      place-content: center;
      padding: 0.1em 0.5em;
      cursor: pointer;
      color: var(--option-color);
      transition: background-color 0.3s ease-in, color 0.3s ease-in;

      &:first-of-type {
        border-radius: var(--option-radius) var(--option-radius) 0 0;
      }

      &:last-of-type {
        border-radius: 0 0 var(--option-radius) var(--option-radius);
      }

      &:where(:focus-visible, :hover) {
        color: var(--option-color-hover);
      }

      &:checked {
        color: var(--option-color-current);
      }
    }
  }
}

@layer base {
  * {
    box-sizing: border-box;
  }

  :root {
    color-scheme: light dark;
    --bg-dark: rgb(16, 24, 40);
    --bg-light: rgb(248, 244, 238);
    --txt-light: rgb(10, 10, 10);
    --txt-dark: rgb(245, 245, 245);
    --line-light: rgba(0 0 0 / .25);
    --line-dark: rgba(255 255 255 / .25);
    --clr-bg: light-dark(var(--bg-light), var(--bg-dark));
    --clr-txt: light-dark(var(--txt-light), var(--txt-dark));
    --clr-lines: light-dark(var(--line-light), var(--line-dark));
  }

  body {
    background-color: var(--clr-bg);
    color: var(--clr-txt);
    min-height: 100svh;
    margin: 0;
    padding: 2rem;
    font-size: 1rem;
    line-height: 1.5;
    display: grid;
    place-content: center;
    gap: 2rem;
  }

  .sr-only {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  h1 {
    margin: 0;
    font-size: clamp(1rem, 2.5vw + 0.45rem, 1.2rem);
    text-align: center;
    text-wrap: balance;
  }

  .msg-supports {
    font-size: 0.8rem;

    @supports (appearance: base-select) {
      display: none;
    }
  }
}
</style>
