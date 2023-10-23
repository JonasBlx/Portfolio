export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#a6120d');
    static readonly TYPESCRIPT = new Tag('Typescript', '#007acc')
    static readonly PYTHON = new Tag('Python', '#FFD43B')
    static readonly NODEJS = new Tag('NodeJS', '#3C873A')
    static readonly MATLAB = new Tag('MATLAB', '#e86e05')
    static readonly JAVASCRIPT = new Tag('JAVASCRIPT', '##F0DB4F')
    static readonly QT = new Tag('Qt', '#2596be')
    static readonly SQL = new Tag('SQL', '#00758F')
    static readonly TENSORFLOW = new Tag('TensorFlow', '#F6BD3A')
    static readonly JAVA = new Tag('Java', '#f89820')

private constructor(private readonly key: string, public readonly color: string) {

}

toString() {
    return this.key;
}
}