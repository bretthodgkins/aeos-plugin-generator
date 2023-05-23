import { 
  CommandInput,
} from '@bhodgk/aeos'

export function createBlockHeading(text: string): any {
  return {
    "object": "block",
    "heading_2": {
      "rich_text": [
        {
          "text": {
            "content": text,
          }
        }
      ]
    }
  };
}

export function createBlockParagraph(text: string): any {
  return {
    "object": "block",
    "paragraph": {
      "rich_text": [
        {
          "text": {
            "content": text,
          },
        }
      ],
      "color": "default"
    }
  };
}

export function createBlockTask(text: string, url: string | undefined): any {
  const link = url ? { url } : undefined;
  const result = {
    "object": "block",
    "to_do": {
      "rich_text": [
        {
          "text": {
            "content": text,
            link,
          },
        },
      ],
    },
  };
  return result;
}

export function createBlockBulletedListItem(text: string): any {
  return {
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "rich_text": [{
        "type": "text",
        "text": {
          "content": text,
        }
      }],
    }
  };
}

export function createBlockImage(url: string): any {
  return {
    "type": "image",
    "image": {
      "type": "external",
      "external": {
        "url": url,
      },
    },
  };
}

export function convertCommandInputsToBulletedList(commandInputs: CommandInput[]): any[] {
  let response: any[] = [];

  for (const commandInput of commandInputs) {
    if (typeof commandInput === 'string') {
      response.push(createBlockBulletedListItem(commandInput));
    } else {
      const sequence = convertCommandInputsToBulletedList(commandInput.sequence);
      if (commandInput.alternativeSequence) {
        const alternativeSequence = convertCommandInputsToBulletedList(commandInput.alternativeSequence);
        response.push({
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "rich_text": [{
              "type": "text",
              "text": {
                "content": commandInput.command,
              }
            }],
            "color": "default",
            "children": [
              {
                "type": "bulleted_list_item",
                "bulleted_list_item": {
                  "rich_text": [{
                    "type": "text",
                    "text": {
                      "content": 'Sequence',
                    }
                  }],
                  "color": "default",
                  "children": sequence,
                }
              },
              {
                "type": "bulleted_list_item",
                "bulleted_list_item": {
                  "rich_text": [{
                    "type": "text",
                    "text": {
                      "content": 'Alternative Sequence',
                    }
                  }],
                  "color": "default",
                  "children": alternativeSequence,
                }
              },

            ],
          }
        });
      } else {
        response.push({
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "rich_text": [{
              "type": "text",
              "text": {
                "content": commandInput.command,
              }
            }],
            "color": "default",
            "children": sequence,
          }
        });
      }
    }
  }

  return response;
}