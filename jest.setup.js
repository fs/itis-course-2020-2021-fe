// fix https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
import MutationObserver from '@sheerun/mutationobserver-shim';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

window.MutationObserver = MutationObserver;

jest.setTimeout(30000);

global.URL.createObjectURL = jest.fn();
