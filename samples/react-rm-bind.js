/**
 * class Component extends React.Component {
 *   constructor() { this.onClick = this.onClick.bind(this); }
 *   onClick() { }
 * }
 *
 * -->
 *
 * class Component extends React.Component {
 *   onClick = () => { }
 * }
 */

module.exports = `
    class Component extends React.Component {
        constructor() {
            this.onClick = this.onClick.bind(this);
            this.onMove = this.onMove.bind(this);
        }

        onClick() {}
        onMove() {}
    }
`;
