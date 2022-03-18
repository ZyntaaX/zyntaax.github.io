const execa = require('execa');
const fs = require('fs');

(async () => {
  let exitCode = 0;
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages']);
    console.log('Building...');
    await execa('npm', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', 'master']);
    await execa('git', ['branch', '-D', 'gh-pages']);
    /* * * WIP * * * */
    await execa('fs', [
      'fs.copyFile("index.html", "404.html")',
    ]);
    // await execa('find', ['./', '-type', 'f',
    //   '-name', '"index.html"', '|', 'while', 'read', 'fname;', 'do',
    //   'dirname=`dirname "$fname"`', 'foldername=`basename "$dirname"`',
    //   'filename=`basename $fname`', 'newname=`404.html`',
    //   // eslint-disable-next-line no-template-curly-in-string
    //   'cp "${dirname}/$filename" "./404.html"', 'done',
    // ]);
    /* * * * * * * * */
    console.log('Successfully deployed');
  } catch (e) {
    console.log(e.message);
    exitCode = 1;
  } finally {
    // await promises.writeFile(configFilePath, originPublicPath, fileOpts);
    await execa('git', ['checkout', '-f', 'master']);
    await execa('git', ['branch', '-D', 'gh-pages']);
  }
  process.exit(exitCode);
})();
