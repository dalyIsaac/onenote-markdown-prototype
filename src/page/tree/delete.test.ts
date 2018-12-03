import { Color, NEWLINE, PageContent } from "../model";
import { deleteNode } from "./delete";
import { SENTINEL, SENTINEL_INDEX } from "./tree";

describe("page/tree/delete", () => {
  describe("delete node", () => {
    test("Simple case", () => {
      const page: PageContent = {
        buffers: [],
        previouslyInsertedNodeIndex: null,
        previouslyInsertedNodeOffset: null,
        newlineFormat: NEWLINE.LF,
        root: 3,
        nodes: [
          SENTINEL,
          {
            // u
            bufferIndex: 1,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 0,
            leftLineFeedCount: 0,
            length: 10,
            lineFeedCount: 2,
            color: Color.Red,
            parent: 2,
            left: SENTINEL_INDEX,
            right: SENTINEL_INDEX,
          },
          {
            // v
            bufferIndex: 2,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 10,
            leftLineFeedCount: 2,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: 3,
            left: 1,
            right: SENTINEL_INDEX,
          },
          {
            bufferIndex: 3,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 20,
            leftLineFeedCount: 4,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: SENTINEL_INDEX,
            left: 2,
            right: 4,
          },
          {
            bufferIndex: 4,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 0,
            leftLineFeedCount: 0,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: 3,
            left: SENTINEL_INDEX,
            right: SENTINEL_INDEX,
          },
        ],
      };
      const expectedPage: PageContent = {
        buffers: [],
        previouslyInsertedNodeIndex: null,
        previouslyInsertedNodeOffset: null,
        newlineFormat: NEWLINE.LF,
        root: 3,
        nodes: [
          SENTINEL,
          {
            // u
            bufferIndex: 1,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 0,
            leftLineFeedCount: 0,
            length: 10,
            lineFeedCount: 2,
            color: Color.Red,
            parent: SENTINEL_INDEX,
            left: SENTINEL_INDEX,
            right: SENTINEL_INDEX,
          },
          {
            // v
            bufferIndex: 2,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 0,
            leftLineFeedCount: 0,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: 3,
            left: SENTINEL_INDEX,
            right: SENTINEL_INDEX,
          },
          {
            bufferIndex: 3,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 10,
            leftLineFeedCount: 2,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: SENTINEL_INDEX,
            left: 2,
            right: 4,
          },
          {
            bufferIndex: 4,
            start: {
              line: 0,
              column: 0,
            },
            end: {
              line: 0,
              column: 0,
            },
            leftCharCount: 0,
            leftLineFeedCount: 0,
            length: 10,
            lineFeedCount: 2,
            color: Color.Black,
            parent: 3,
            left: SENTINEL_INDEX,
            right: SENTINEL_INDEX,
          },
        ],
      };
      const receivedPage = deleteNode(page, 1);
      expect(receivedPage).toEqual(expectedPage);
    });

    describe("Sibling s is black and at least of one of s's children is red", () => {
      test("Right right case", () => {
        const page: PageContent = {
          buffers: [],
          previouslyInsertedNodeIndex: null,
          previouslyInsertedNodeOffset: null,
          newlineFormat: NEWLINE.LF,
          root: 2,
          nodes: [
            SENTINEL,
            {
              bufferIndex: 1,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 2,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 2,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 10,
              leftLineFeedCount: 2,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: 1,
              right: 4,
            },
            {
              bufferIndex: 3,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Red,
              parent: 4,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 4,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 10,
              leftLineFeedCount: 2,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 2,
              left: 3,
              right: 5,
            },
            {
              bufferIndex: 5,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Red,
              parent: 4,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
          ],
        };
        const expectedPage: PageContent = {
          buffers: [],
          previouslyInsertedNodeIndex: null,
          previouslyInsertedNodeOffset: null,
          newlineFormat: NEWLINE.LF,
          root: 4,
          nodes: [
            SENTINEL,
            {
              bufferIndex: 1,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 2,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 4,
              left: SENTINEL_INDEX,
              right: 3,
            },
            {
              bufferIndex: 3,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Red,
              parent: 2,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 4,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 20,
              leftLineFeedCount: 4,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: 2,
              right: 5,
            },
            {
              bufferIndex: 5,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 4,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
          ],
        };
        const receivedPage = deleteNode(page, 1);
        expect(receivedPage).toEqual(expectedPage);
      });

      test("Right left case", () => {
        const page: PageContent = {
          buffers: [],
          previouslyInsertedNodeIndex: null,
          previouslyInsertedNodeOffset: null,
          newlineFormat: NEWLINE.LF,
          root: 2,
          nodes: [
            SENTINEL,
            {
              bufferIndex: 1,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 2,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },

            {
              bufferIndex: 2,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 10,
              leftLineFeedCount: 2,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: 1,
              right: 4,
            },

            {
              bufferIndex: 3,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Red,
              parent: 2,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 4,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 10,
              leftLineFeedCount: 2,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 2,
              left: 3,
              right: SENTINEL_INDEX,
            },
          ],
        };
        const expectedPage: PageContent = {
          buffers: [],
          previouslyInsertedNodeIndex: null,
          previouslyInsertedNodeOffset: null,
          newlineFormat: NEWLINE.LF,
          root: 3,
          nodes: [
            SENTINEL,
            {
              bufferIndex: 1,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 2,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 3,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
            {
              bufferIndex: 3,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 10,
              leftLineFeedCount: 2,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: SENTINEL_INDEX,
              left: 2,
              right: 4,
            },
            {
              bufferIndex: 4,
              start: {
                line: 0,
                column: 0,
              },
              end: {
                line: 0,
                column: 0,
              },
              leftCharCount: 0,
              leftLineFeedCount: 0,
              length: 10,
              lineFeedCount: 2,
              color: Color.Black,
              parent: 3,
              left: SENTINEL_INDEX,
              right: SENTINEL_INDEX,
            },
          ],
        };
        const receivedPage = deleteNode(page, 1);
        expect(receivedPage).toEqual(expectedPage);
      });
    });
  });
});
