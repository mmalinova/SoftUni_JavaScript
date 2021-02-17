class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20;      // Default value    
    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('Name must be a non-empty string');
    }
    if (newValue.length === 0) {
      throw new Error('Name must be a non-empty string');
    }
    this._name = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('Value must be a non-negative number');
    }
    this._value = newValue;
  }

  get VAT() {
    return this._VAT;
  }

  set VAT(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('VAT must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('VAT must be a non-negative number');
    }
    this._VAT = newValue;
  }

  get active() {
    return this._active;
  }

  set active(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new Error('Active status must be a boolean');
    }
    this._active = newValue;
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
    ];
    return output.join('\n');
  }
}

// Should throw an error
try {
  const hrPack = new PaymentPackage('HR Services');
} catch (err) {
  console.log('Error: ' + err.message);
}
const packages = [
  new PaymentPackage('HR Services', 1500),
  new PaymentPackage('Consultation', 800),
  new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));

const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
  wrongPack.active = null;
} catch (err) {
  console.log('Error: ' + err.message);
}

const assert = require('chai').assert;

describe('PaymentPackage', () => {
  let instance;
  beforeEach(() => {
    instance = new PaymentPackage('HR Services', 1500);
  });

  describe('constructor', () => {
    it('name', () => {
      assert.equal(instance._name, 'HR Services');
    });
    it('value', () => {
      assert.equal(instance._value, 1500);
    });
    it('VAT', () => {
      assert.equal(instance._VAT, 20);
    });
    it('active', () => {
      assert.equal(instance._active, true);
    });
  });

  it('get name', () => {
    assert.equal(instance.name, 'HR Services');
  });

  describe('set name', () => {
    it('incorrect string', () => {
      assert.throw(() => { instance.name = 2; }, 'Name must be a non-empty string');
      assert.throw(() => { instance.name = ''; }, 'Name must be a non-empty string');
    });
  });

  it('get value', () => {
    assert.equal(instance.value, 1500);
  });

  describe('set value', () => {
    it('incorrect number', () => {
      assert.throw(() => { instance.value = 'a'; }, 'Value must be a non-negative number');
      assert.throw(() => { instance.value = -3; }, 'Value must be a non-negative number');
      assert.doesNotThrow(() => {instance.value = 0;});
    });
  });

  it('get VAT', () => {
    assert.equal(instance.VAT, 20);
  });

  describe('set VAT', () => {
    it('incorrect number', () => {
      assert.throw(() => { instance.VAT = 'v'; }, 'VAT must be a non-negative number');
      assert.throw(() => { instance.VAT = -3.4; }, 'VAT must be a non-negative number');
      assert.doesNotThrow(() => {instance.VAT = 0;});
    });
  });

  it('get active', () => {
    assert.equal(instance.active, true);
  });

  describe('set active', () => {
    it('is not a boolean', () => {
      assert.throw(() => { instance.active = 9; }, 'Active status must be a boolean');
    });
  });

  it('toString', () => {
    let expected = [
      'Package: HR Services',
      '- Value (excl. VAT): 1500',
      '- Value (VAT 20%): 1800'
    ];

    const actual = instance.toString();
    assert.equal(expected.join('\n'), actual);

    instance.name = 'Services';
    instance.value = 500;
    instance.VAT = 10;
    instance.active = false;

    expected = [
      'Package: Services (inactive)',
      '- Value (excl. VAT): 500',
      '- Value (VAT 10%): 550'
    ];

    assert.equal(expected.join('\n'), instance.toString());
  });
});
