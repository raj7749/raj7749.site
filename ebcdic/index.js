/* =========================================================
   EBCDIC File Viewer — Core Logic
   ========================================================= */

// ---- EBCDIC → ASCII Code Page Tables ----

const CP037 = [
  0x00, 0x01, 0x02, 0x03, 0x9C, 0x09, 0x86, 0x7F, 0x97, 0x8D, 0x8E, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F,
  0x10, 0x11, 0x12, 0x13, 0x9D, 0x85, 0x08, 0x87, 0x18, 0x19, 0x92, 0x8F, 0x1C, 0x1D, 0x1E, 0x1F,
  0x80, 0x81, 0x82, 0x83, 0x84, 0x0A, 0x17, 0x1B, 0x88, 0x89, 0x8A, 0x8B, 0x8C, 0x05, 0x06, 0x07,
  0x90, 0x91, 0x16, 0x93, 0x94, 0x95, 0x96, 0x04, 0x98, 0x99, 0x9A, 0x9B, 0x14, 0x15, 0x9E, 0x1A,
  0x20, 0xA0, 0xE2, 0xE4, 0xE0, 0xE1, 0xE3, 0xE5, 0xE7, 0xF1, 0xA2, 0x2E, 0x3C, 0x28, 0x2B, 0x7C,
  0x26, 0xE9, 0xEA, 0xEB, 0xE8, 0xED, 0xEE, 0xEF, 0xEC, 0xDF, 0x21, 0x24, 0x2A, 0x29, 0x3B, 0xAC,
  0x2D, 0x2F, 0xC2, 0xC4, 0xC0, 0xC1, 0xC3, 0xC5, 0xC7, 0xD1, 0xA6, 0x2C, 0x25, 0x5F, 0x3E, 0x3F,
  0xF8, 0xC9, 0xCA, 0xCB, 0xC8, 0xCD, 0xCE, 0xCF, 0xCC, 0x60, 0x3A, 0x23, 0x40, 0x27, 0x3D, 0x22,
  0xD8, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0xAB, 0xBB, 0xF0, 0xFD, 0xFE, 0xB1,
  0xB0, 0x6A, 0x6B, 0x6C, 0x6D, 0x6E, 0x6F, 0x70, 0x71, 0x72, 0xAA, 0xBA, 0xE6, 0xB8, 0xC6, 0xA4,
  0xB5, 0x7E, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0xA1, 0xBF, 0xD0, 0xDD, 0xDE, 0xAE,
  0x5E, 0xA3, 0xA5, 0xB7, 0xA9, 0xA7, 0xB6, 0xBC, 0xBD, 0xBE, 0x5B, 0x5D, 0xAF, 0xA8, 0xB4, 0xD7,
  0x7B, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0xAD, 0xF4, 0xF6, 0xF2, 0xF3, 0xF5,
  0x7D, 0x4A, 0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x50, 0x51, 0x52, 0xB9, 0xFB, 0xFC, 0xF9, 0xFA, 0xFF,
  0x5C, 0xF7, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0xB2, 0xD4, 0xD6, 0xD2, 0xD3, 0xD5,
  0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0xB3, 0xDB, 0xDC, 0xD9, 0xDA, 0x9F
];

const CP500 = [
  0x00, 0x01, 0x02, 0x03, 0x9C, 0x09, 0x86, 0x7F, 0x97, 0x8D, 0x8E, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F,
  0x10, 0x11, 0x12, 0x13, 0x9D, 0x85, 0x08, 0x87, 0x18, 0x19, 0x92, 0x8F, 0x1C, 0x1D, 0x1E, 0x1F,
  0x80, 0x81, 0x82, 0x83, 0x84, 0x0A, 0x17, 0x1B, 0x88, 0x89, 0x8A, 0x8B, 0x8C, 0x05, 0x06, 0x07,
  0x90, 0x91, 0x16, 0x93, 0x94, 0x95, 0x96, 0x04, 0x98, 0x99, 0x9A, 0x9B, 0x14, 0x15, 0x9E, 0x1A,
  0x20, 0xA0, 0xE2, 0xE4, 0xE0, 0xE1, 0xE3, 0xE5, 0xE7, 0xF1, 0x5B, 0x2E, 0x3C, 0x28, 0x2B, 0x21,
  0x26, 0xE9, 0xEA, 0xEB, 0xE8, 0xED, 0xEE, 0xEF, 0xEC, 0xDF, 0x5D, 0x24, 0x2A, 0x29, 0x3B, 0x5E,
  0x2D, 0x2F, 0xC2, 0xC4, 0xC0, 0xC1, 0xC3, 0xC5, 0xC7, 0xD1, 0xA6, 0x2C, 0x25, 0x5F, 0x3E, 0x3F,
  0xF8, 0xC9, 0xCA, 0xCB, 0xC8, 0xCD, 0xCE, 0xCF, 0xCC, 0x60, 0x3A, 0x23, 0x40, 0x27, 0x3D, 0x22,
  0xD8, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0xAB, 0xBB, 0xF0, 0xFD, 0xFE, 0xB1,
  0xB0, 0x6A, 0x6B, 0x6C, 0x6D, 0x6E, 0x6F, 0x70, 0x71, 0x72, 0xAA, 0xBA, 0xE6, 0xB8, 0xC6, 0xA4,
  0xB5, 0x7E, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0xA1, 0xBF, 0xD0, 0xDD, 0xDE, 0xAE,
  0xAC, 0xA3, 0xA5, 0xB7, 0xA9, 0xA7, 0xB6, 0xBC, 0xBD, 0xBE, 0xAF, 0xA8, 0xB4, 0xD7, 0x7B, 0x41,
  0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0xAD, 0xF4, 0xF6, 0xF2, 0xF3, 0xF5, 0x7D, 0x4A,
  0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x50, 0x51, 0x52, 0xB9, 0xFB, 0xFC, 0xF9, 0xFA, 0xFF, 0x5C, 0xF7,
  0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0xB2, 0xD4, 0xD6, 0xD2, 0xD3, 0xD5, 0x30, 0x31,
  0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0xB3, 0xDB, 0xDC, 0xD9, 0xDA, 0x9F
];

// ---- State ----
let fileBuffer = null;
let currentCodePage = CP037;
let recordLength = 0; // 0 = show entire file
let currentPage = 0;
let totalPages = 1;
let totalRecords = 1;
const RECORDS_PER_PAGE = 50;
let viewMode = 'text'; // 'text', 'hex', 'table'
let copybookFields = []; // parsed copybook fields

// ---- DOM References ----
const fileInput = document.getElementById('fileInput');
const copybookInput = document.getElementById('copybookInput');
const recordLengthInput = document.getElementById('recordLength');
const encodingSelect = document.getElementById('encodingSelect');
const toggleViewBtn = document.getElementById('toggleView');
const hexPanel = document.getElementById('hexPanel');
const textPanel = document.getElementById('textPanel');
const tablePanel = document.getElementById('tablePanel');
const hexOutput = document.getElementById('hexOutput');
const textOutput = document.getElementById('textOutput');
const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
const copybookNameEl = document.getElementById('copybookName');
const prevRecordBtn = document.getElementById('prevRecord');
const nextRecordBtn = document.getElementById('nextRecord');
const recordInfo = document.getElementById('recordInfo');

// ---- Event Listeners ----
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    loadFile(e.target.files[0]);
  }
});

copybookInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    loadCopybook(e.target.files[0]);
  }
});

encodingSelect.addEventListener('change', (e) => {
  currentCodePage = e.target.value === 'cp500' ? CP500 : CP037;
  render();
});

recordLengthInput.addEventListener('change', () => {
  recordLength = Math.max(0, parseInt(recordLengthInput.value, 10) || 0);
  currentPage = 0;
  calculateRecords();
  render();
});

toggleViewBtn.addEventListener('click', () => {
  if (viewMode === 'text') {
    viewMode = 'hex';
  } else if (viewMode === 'hex') {
    if (copybookFields.length > 0) {
      viewMode = 'table';
    } else {
      viewMode = 'text';
    }
  } else {
    viewMode = 'text';
  }
  applyViewMode();
  render();
});

prevRecordBtn.addEventListener('click', () => navigatePage(-1));
nextRecordBtn.addEventListener('click', () => navigatePage(1));

function applyViewMode() {
  hexPanel.style.display = (viewMode === 'hex') ? '' : 'none';
  textPanel.style.display = (viewMode === 'text') ? '' : 'none';
  tablePanel.style.display = (viewMode === 'table') ? '' : 'none';

  const labels = { text: 'Showing Text', hex: 'Showing Hex', table: 'Showing Table' };
  toggleViewBtn.textContent = labels[viewMode] || 'Toggle View';
}

// ---- File Loading ----
function loadFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    fileBuffer = new Uint8Array(e.target.result);
    currentPage = 0;
    calculateRecords();
    render();
  };
  reader.readAsArrayBuffer(file);
}

// ---- Copybook Loading ----
function loadCopybook(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    copybookFields = parseCopybook(text);

    if (copybookFields.length > 0) {
      // Auto-set record length from copybook
      const totalLen = copybookFields.reduce((sum, f) => sum + f.length, 0);
      recordLength = totalLen;
      recordLengthInput.value = totalLen;

      copybookNameEl.textContent = file.name;

      // Switch to table view
      viewMode = 'table';
      applyViewMode();

      currentPage = 0;
      calculateRecords();
      render();
    } else {
      alert('Could not parse any fields from the copybook. Please check the format.');
    }
  };
  reader.readAsText(file);
}

// ---- Copybook Parser ----
function parseCopybook(text) {
  const fields = [];
  // Remove comment lines (columns 1-6 are sequence, col 7 is indicator: * = comment)
  const lines = text.split(/\r?\n/);
  let combined = '';

  for (const line of lines) {
    // Skip empty lines
    if (line.trim() === '') continue;
    // If line has column 7 indicator, check for comment
    if (line.length >= 7 && (line[6] === '*' || line[6] === '/')) continue;
    // Strip sequence numbers (cols 1-6) and identification (cols 73-80) if present
    let content = line;
    if (line.length > 72) {
      content = line.substring(6, 72);
    } else if (line.length > 6 && /^\d{6}/.test(line)) {
      content = line.substring(6);
    }
    combined += ' ' + content;
  }

  // Split on periods (COBOL statement terminators)
  const statements = combined.split('.');

  let currentOffset = 0;

  for (const stmt of statements) {
    const trimmed = stmt.trim();
    if (!trimmed) continue;

    // Match: level-number field-name PIC/PICTURE [IS] clause [USAGE] [COMP/COMP-3/etc]
    const match = trimmed.match(
      /^(\d{1,2})\s+([\w-]+)\s+(?:PIC|PICTURE)\s+(?:IS\s+)?([^\s]+(?:\s*\(\s*\d+\s*\))?)\s*(.*)?$/i
    );

    if (!match) continue;

    const level = parseInt(match[1], 10);
    // Skip special levels
    if (level === 66 || level === 77 || level === 88) continue;

    const name = match[2];
    const picClause = match[3];
    const remainder = (match[4] || '').trim();

    // Determine usage
    let usage = 'DISPLAY'; // default
    if (/COMP-3|COMPUTATIONAL-3|PACKED-DECIMAL/i.test(remainder)) {
      usage = 'COMP-3';
    } else if (/COMP-4|COMPUTATIONAL-4|COMP\b|COMPUTATIONAL\b|BINARY\b/i.test(remainder)) {
      usage = 'COMP';
    }

    // Parse PIC clause
    const fieldInfo = parsePicClause(picClause, usage);
    fieldInfo.name = name;
    fieldInfo.level = level;
    fieldInfo.offset = currentOffset;

    fields.push(fieldInfo);
    currentOffset += fieldInfo.length;
  }

  return fields;
}

function parsePicClause(pic, usage) {
  // Expand shorthand: X(5) -> XXXXX, 9(3) -> 999, etc.
  let expanded = pic.replace(/([XxAa9SsVv])\((\d+)\)/g, (_, ch, count) => {
    return ch.repeat(parseInt(count, 10));
  });

  // Remove sign character S at start if present (for display/zoned)
  const hasSigned = /^[Ss]/.test(expanded);
  expanded = expanded.replace(/^[Ss]/, '');

  // Count digits and decimals
  const intDigits = (expanded.match(/9/gi) || []).length;
  const hasImpliedDecimal = /[Vv]/.test(expanded);
  const alphaLen = (expanded.match(/[XxAa]/gi) || []).length;

  let length, type, decimalDigits = 0;

  if (alphaLen > 0) {
    // Alphanumeric
    type = 'ALPHA';
    length = alphaLen + intDigits; // in case of mixed
  } else if (usage === 'COMP-3') {
    // Packed decimal: ceil((digits + 1) / 2)
    const totalDigits = intDigits + (hasSigned ? 0 : 0);
    if (hasImpliedDecimal) {
      const parts = expanded.split(/[Vv]/);
      decimalDigits = (parts[1] || '').replace(/[^9]/gi, '').length;
    }
    length = Math.ceil((intDigits + 1) / 2);
    type = 'COMP-3';
  } else if (usage === 'COMP') {
    // Binary: 1-4 digits = 2 bytes, 5-9 = 4 bytes, 10-18 = 8 bytes
    if (hasImpliedDecimal) {
      const parts = expanded.split(/[Vv]/);
      decimalDigits = (parts[1] || '').replace(/[^9]/gi, '').length;
    }
    if (intDigits <= 4) length = 2;
    else if (intDigits <= 9) length = 4;
    else length = 8;
    type = 'COMP';
  } else {
    // Zoned decimal / display numeric
    if (hasImpliedDecimal) {
      const parts = expanded.split(/[Vv]/);
      decimalDigits = (parts[1] || '').replace(/[^9]/gi, '').length;
    }
    type = 'NUMERIC';
    length = intDigits;
  }

  return { type, length, signed: hasSigned, decimalDigits };
}

// ---- Calculate records ----
function calculateRecords() {
  if (!fileBuffer) { totalRecords = 0; totalPages = 0; return; }
  if (recordLength <= 0) {
    totalRecords = 1;
    totalPages = 1;
  } else {
    totalRecords = Math.ceil(fileBuffer.length / recordLength);
    totalPages = Math.ceil(totalRecords / RECORDS_PER_PAGE);
  }
}

// ---- Navigation ----
function navigatePage(delta) {
  if (totalPages <= 1) return;
  currentPage = Math.max(0, Math.min(totalPages - 1, currentPage + delta));
  render();
}

// ---- Rendering ----
function render() {
  if (!fileBuffer) return;

  let data, offset, firstRecordIdx;
  if (recordLength <= 0) {
    data = fileBuffer;
    offset = 0;
    firstRecordIdx = 0;
  } else {
    const firstRecord = currentPage * RECORDS_PER_PAGE;
    const lastRecord = Math.min(firstRecord + RECORDS_PER_PAGE, totalRecords);
    const start = firstRecord * recordLength;
    const end = Math.min(lastRecord * recordLength, fileBuffer.length);
    data = fileBuffer.slice(start, end);
    offset = start;
    firstRecordIdx = firstRecord;
  }

  renderHexView(data, offset);
  renderTextView(data);

  if (copybookFields.length > 0 && recordLength > 0) {
    renderTableView(data, firstRecordIdx);
  }

  updateRecordInfo();
}

function ebcdicToChar(byte) {
  const ascii = currentCodePage[byte];
  if (ascii >= 0x20 && ascii < 0x7F) {
    return String.fromCharCode(ascii);
  }
  return '.';
}

function isPrintable(byte) {
  const ascii = currentCodePage[byte];
  return ascii >= 0x20 && ascii < 0x7F;
}

function renderHexView(data, startOffset) {
  const bytesPerLine = 16;
  let output = '';

  for (let i = 0; i < data.length; i += bytesPerLine) {
    const lineBytes = data.slice(i, Math.min(i + bytesPerLine, data.length));
    const offsetStr = (startOffset + i).toString(16).toUpperCase().padStart(8, '0');

    let hexPart = '';
    let asciiPart = '';

    for (let j = 0; j < bytesPerLine; j++) {
      if (j < lineBytes.length) {
        hexPart += lineBytes[j].toString(16).toUpperCase().padStart(2, '0') + ' ';
        asciiPart += isPrintable(lineBytes[j]) ? ebcdicToChar(lineBytes[j]) : '.';
      } else {
        hexPart += '   ';
        asciiPart += ' ';
      }
      if (j === 7) hexPart += ' ';
    }

    output += offsetStr + '  ' + hexPart + ' |' + asciiPart + '|\n';
  }

  hexOutput.textContent = output || '(no data)';
}

function renderTextView(data) {
  let decoded = '';
  for (let i = 0; i < data.length; i++) {
    decoded += ebcdicToChar(data[i]);
  }

  const lineLen = recordLength > 0 ? recordLength : 80;
  let output = '';
  let lineNum = 1;
  for (let i = 0; i < decoded.length; i += lineLen) {
    const line = decoded.substring(i, i + lineLen);
    output += String(lineNum).padStart(4, ' ') + ' | ' + line + '\n';
    lineNum++;
  }

  textOutput.textContent = output || '(no data)';
}

// ---- Table View ----
function renderTableView(data, firstRecordIdx) {
  // Build header
  let headerHtml = '<tr><th>#</th>';
  for (const field of copybookFields) {
    headerHtml += '<th title="' + escapeAttr(field.type + ' (' + field.length + ' bytes)') + '">' + escapeHtml(field.name) + '</th>';
  }
  headerHtml += '</tr>';
  tableHead.innerHTML = headerHtml;

  // Build rows
  let bodyHtml = '';
  const recLen = recordLength;
  const numRecords = Math.floor(data.length / recLen);

  for (let r = 0; r < numRecords; r++) {
    const recStart = r * recLen;
    const recData = data.slice(recStart, recStart + recLen);
    const recNum = firstRecordIdx + r + 1;

    bodyHtml += '<tr><td class="row-num">' + recNum + '</td>';

    for (const field of copybookFields) {
      const fieldData = recData.slice(field.offset, field.offset + field.length);
      const value = decodeField(fieldData, field);
      bodyHtml += '<td>' + escapeHtml(value) + '</td>';
    }

    bodyHtml += '</tr>';
  }

  tableBody.innerHTML = bodyHtml || '<tr><td colspan="' + (copybookFields.length + 1) + '">(no data)</td></tr>';
}

function decodeField(data, field) {
  switch (field.type) {
    case 'ALPHA':
      return decodeAlpha(data);

    case 'NUMERIC':
      return decodeZonedDecimal(data, field);

    case 'COMP-3':
      return decodePackedDecimal(data, field);

    case 'COMP':
      return decodeBinaryField(data, field);

    default:
      return decodeAlpha(data);
  }
}

function decodeAlpha(data) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    result += ebcdicToChar(data[i]);
  }
  return result.trimEnd();
}

function decodeZonedDecimal(data, field) {
  let result = '';
  let isNegative = false;

  for (let i = 0; i < data.length; i++) {
    const byte = data[i];
    const ascii = currentCodePage[byte];

    if (i === data.length - 1 && field.signed) {
      // Last byte zone carries the sign
      const highNibble = (byte >> 4) & 0x0F;
      const lowNibble = byte & 0x0F;
      // In EBCDIC zoned: D = negative, C/F = positive
      if (highNibble === 0xD) isNegative = true;
      result += String(lowNibble);
    } else {
      // Normal digit
      if (ascii >= 0x30 && ascii <= 0x39) {
        result += String.fromCharCode(ascii);
      } else {
        result += ebcdicToChar(byte);
      }
    }
  }

  if (field.decimalDigits > 0 && result.length > field.decimalDigits) {
    const intPart = result.substring(0, result.length - field.decimalDigits);
    const decPart = result.substring(result.length - field.decimalDigits);
    result = intPart + '.' + decPart;
  }

  return (isNegative ? '-' : '') + result;
}

function decodePackedDecimal(data, field) {
  let digits = '';
  let isNegative = false;

  for (let i = 0; i < data.length; i++) {
    const byte = data[i];
    const highNibble = (byte >> 4) & 0x0F;
    const lowNibble = byte & 0x0F;

    if (i < data.length - 1) {
      digits += String(highNibble) + String(lowNibble);
    } else {
      // Last byte: high nibble is digit, low nibble is sign
      digits += String(highNibble);
      if (lowNibble === 0x0D || lowNibble === 0x0B) {
        isNegative = true;
      }
    }
  }

  // Remove leading zeros but keep at least one digit
  digits = digits.replace(/^0+/, '') || '0';

  if (field.decimalDigits > 0) {
    // Pad digits if needed
    while (digits.length <= field.decimalDigits) digits = '0' + digits;
    const intPart = digits.substring(0, digits.length - field.decimalDigits);
    const decPart = digits.substring(digits.length - field.decimalDigits);
    digits = intPart + '.' + decPart;
  }

  return (isNegative ? '-' : '') + digits;
}

function decodeBinaryField(data, field) {
  let value = 0;
  for (let i = 0; i < data.length; i++) {
    value = value * 256 + data[i];
  }

  // Handle signed
  if (field.signed && data.length > 0) {
    const maxVal = Math.pow(256, data.length);
    if (value >= maxVal / 2) {
      value = value - maxVal;
    }
  }

  if (field.decimalDigits > 0) {
    return (value / Math.pow(10, field.decimalDigits)).toFixed(field.decimalDigits);
  }

  return String(value);
}

function updateRecordInfo() {
  if (recordLength <= 0) {
    recordInfo.textContent = 'Showing all (' + fileBuffer.length + ' bytes)';
  } else {
    const firstRec = currentPage * RECORDS_PER_PAGE + 1;
    const lastRec = Math.min(firstRec + RECORDS_PER_PAGE - 1, totalRecords);
    recordInfo.textContent = 'Page ' + (currentPage + 1) + '/' + totalPages + '  (Records ' + firstRec + '-' + lastRec + ' of ' + totalRecords + ')';
  }
}

// ---- Utilities ----
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
