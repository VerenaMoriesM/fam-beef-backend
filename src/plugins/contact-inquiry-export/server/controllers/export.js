'use strict';

const CONTENT_TYPE_UID = 'api::contact-inquiry.contact-inquiry';

const COLUMNS = [
  { header: 'First Name', key: 'firstName', width: 20 },
  { header: 'Last Name', key: 'lastName', width: 20 },
  { header: 'Email', key: 'email', width: 30 },
  { header: 'Phone', key: 'phone', width: 18 },
  { header: 'Purpose', key: 'purpose', width: 15 },
  { header: 'Message', key: 'message', width: 60 },
  { header: 'Status', key: 'status', width: 12 },
  { header: 'Submitted At', key: 'createdAt', width: 22 },
];

module.exports = {
  async contactInquiries(ctx) {
    const ExcelJS = require('exceljs');

    const entries = await strapi.documents(CONTENT_TYPE_UID).findMany({
      sort: { createdAt: 'desc' },
      pagination: { pageSize: 10000 },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Contact Inquiries');

    sheet.columns = COLUMNS;
    sheet.getRow(1).font = { bold: true };

    for (const entry of entries) {
      sheet.addRow({
        firstName: entry.firstName,
        lastName: entry.lastName,
        email: entry.email,
        phone: entry.phone,
        purpose: entry.purpose,
        message: entry.message,
        status: entry.status,
        createdAt: entry.createdAt ? new Date(entry.createdAt).toLocaleString() : '',
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const filename = `contact-inquiries-${new Date().toISOString().slice(0, 10)}.xlsx`;

    ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    ctx.set('Content-Disposition', `attachment; filename="${filename}"`);
    ctx.body = Buffer.from(buffer);
  },
};
