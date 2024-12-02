import { getTsProgram, expandTypesPlugin } from 'cem-plugin-expanded-types';
import { customElementReactWrapperPlugin } from 'custom-element-react-wrappers';
import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";

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
  ],

  overrideModuleCreation: ({ ts, globs }) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program
      .getSourceFiles()
      .filter(sf => globs.find(glob => sf.fileName.includes(glob)));
  },
};
