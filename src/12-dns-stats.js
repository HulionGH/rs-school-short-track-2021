/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 */
function getDNSStats(domains) {
  const splitDomains = domains.map((domain) => (domain.split('.')));
  return splitDomains.reduce((dnsT, splitDomain) => {
    const dns = dnsT;
    let dnsName = '';
    splitDomain.reverse().forEach((dnselement) => {
      dnsName += `.${dnselement}`;
      if (dns[dnsName]) {
        dns[dnsName] += 1;
      } else {
        dns[dnsName] = 1;
      }
    });
    return dns;
  }, {});
}

module.exports = getDNSStats;
