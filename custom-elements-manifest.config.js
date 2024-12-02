import { getTsProgram, expandTypesPlugin } from 'cem-plugin-expanded-types';
import { customElementReactWrapperPlugin } from 'custom-element-react-wrappers';
import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { customElementSolidJsPlugin } from "custom-element-solidjs-integration";
import { customElementJsxPlugin } from "custom-element-jsx-integration";
import { customElementVuejsPlugin } from "custom-element-vuejs-integration";
import { customElementSveltePlugin } from "custom-element-svelte-integration";

export default {
  /** Globs to analyze */
  globs: ['src/components/**/*.ts'],
  /** Globs to exclude */
  exclude: ['src/**/*.test.ts', 'src/**/*.stories.ts', 'src/**/*.styles.ts'],
  /** Enable special handling for litelement */
  litelement: true,
  /** Provide custom plugins */
  plugins: [
    expandTypesPlugin(),
    customElementVsCodePlugin(),
    customElementJetBrainsPlugin(),
    customElementReactWrapperPlugin({
      outdir: 'react',
      modulePath: (className, tagName) =>
        `../dist/components/${tagName}/${className}.js`,
    }),
    customElementSolidJsPlugin({
      outdir: 'types',
      fileName: 'custom-element-solidjs.d.ts',
      modulePath: (className, tagName) =>
        `../dist/components/${tagName}/${className}.js`,
    }),
    customElementJsxPlugin({
      outdir: 'types',
      modulePath: (className, tagName) =>
        `../dist/components/${tagName}/${className}.js`,
    }),
    customElementVuejsPlugin({
      outdir: 'types',
      fileName: 'custom-element-vuejs.d.ts',
      modulePath: (className, tagName) =>
        `../dist/components/${tagName}/${className}.js`,
    }),
    customElementSveltePlugin({
      outdir: 'types',
      fileName: 'custom-element-svelte.d.ts',
      modulePath: (className, tagName) =>
        `../dist/components/${tagName}/${className}.js`,
    }),
  ],

  overrideModuleCreation: ({ ts, globs }) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program
      .getSourceFiles()
      .filter(sf => globs.find(glob => sf.fileName.includes(glob)));
  },
};
