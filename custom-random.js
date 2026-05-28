// Source - https://stackoverflow.com/a/19301306
// Posted by Antti Kissaniemi, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-28, License - CC BY-SA 4.0
// Modified by Alina Rosa
var mask = 0xffffffff;

// Returns number between 0 (inclusive) and 1.0 (exclusive),
// just like Math.random().
function random(seed)
{
    var m_w = (123456789 + seed) & mask;
    var m_z = (987654321 - seed) & mask;
    m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
}
