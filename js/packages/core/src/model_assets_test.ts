import {LiteRtLm, loadLiteRtLm, unloadLiteRtLm} from '@litert-lm/core';
// Placeholder for internal dependency on trusted resource url

describe('ModelAssets tests', () => {
  let liteRtLm: LiteRtLm;
  beforeAll(async () => {
    unloadLiteRtLm();
    liteRtLm = await loadLiteRtLm(trustedResourceUrl`/wasm`);
  });

  describe('ModelAssets', () => {
    it('creates ModelAssets', () => {
      const modelAssets =
          liteRtLm.liteRtLmWasm.ModelAssets.create('/path/to/model');
      expect(modelAssets).toBeDefined();
      expect(modelAssets.getPath()).toBe('/path/to/model');
      modelAssets.delete();
    });
  });
});
