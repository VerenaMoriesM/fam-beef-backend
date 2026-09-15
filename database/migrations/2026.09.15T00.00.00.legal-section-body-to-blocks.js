'use strict';

const TABLE_NAME = 'components_sections_legal_sections';

function textToBlocks(text) {
  const paragraphs = String(text)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    return [{ type: 'paragraph', children: [{ type: 'text', text: '' }] }];
  }

  return paragraphs.map((paragraph) => ({
    type: 'paragraph',
    children: [{ type: 'text', text: paragraph }],
  }));
}

function isAlreadyBlocks(value) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed);
  } catch (e) {
    return false;
  }
}

async function up(knex) {
  const hasTable = await knex.schema.hasTable(TABLE_NAME);
  if (!hasTable) {
    return;
  }

  const rows = await knex(TABLE_NAME).select('id', 'body');

  for (const row of rows) {
    if (typeof row.body !== 'string' || isAlreadyBlocks(row.body)) {
      continue;
    }

    const blocks = textToBlocks(row.body);
    await knex(TABLE_NAME)
      .where({ id: row.id })
      .update({ body: JSON.stringify(blocks) });
  }
}

module.exports = { up };
